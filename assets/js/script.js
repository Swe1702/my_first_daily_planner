//adds the present day, date and month
var timeDisplayEl = $("#currentDay"); // First, it selects the element with the ID currentDay and stores it in the variable timeDisplayEl.
var rightNow = dayjs().format("dddd , MMMM  D[th] "); // Format the current date and time using dayjs().format('dddd , MMMM D[th] '), where dddd represents the full day name, MMMM represents the full month name, and D[th] represents the day of the month with an ordinal suffix.
timeDisplayEl.text(rightNow); // Set the text of the timeDisplayEl element to the formatted current date and time
// Define function to update styles based on current hour
function updateHourStyles() {
  // Get current hour
  var currentHour = dayjs().hour();

  // Iterate through each time block
  $(".time-block").each(function () {
    // Get block hour
    var blockHour = parseInt($(this).attr("data-hour"));

    // Conditional statements to determine the style class
    if (blockHour < currentHour) {
      $(this).addClass("past"); // If past hour, add 'past' class
    } else if (blockHour === currentHour) {
      $(this).removeClass("past"); // If present hour, remove 'past' class
      $(this).addClass("present"); // Add 'present' class
    } else {
      $(this).removeClass("past"); // If future hour, remove 'past' class
      $(this).removeClass("present"); // Remove 'present' class
      $(this).addClass("future"); // Add 'future' class
    }
  });
}
// Create timeblocks for standard business hours
function createTimeblocks() {
  var container = $(".container"); // Container for time blocks

  for (var hour = 9; hour <= 17; hour++) {
    // Loop from 9 to 17 (9AM to 5PM)
    var timeblock = $("<div>").addClass("time-block row"); // Create time block
    timeblock.attr("data-hour", hour); // Set time block attribute for data-hour

    var hourCol = $("<div>").addClass("hour col-2"); // Create hour column
    hourCol.text(dayjs().hour(hour).format("hA")); // Display hour in AM/PM format

    var textAreaCol = $("<textarea>").addClass("description col-8"); // Create text area column

    var saveBtnCol = $("<button>").addClass("saveBtn col-2"); // Create save button column
    saveBtnCol.append($("<i>").addClass("fas fa-save")); // Append save icon to button

    timeblock.append(hourCol, textAreaCol, saveBtnCol); // Append all columns to time block
    container.append(timeblock); // Append time block to container
  }
}
// Load events from local storage
function loadEvents() {
  // Loop through time-blocks
  $(".time-block").each(function () {
    // Get the hour attribute
    var hour = $(this).attr("data-hour");
    // Retrieve event from localStorage
    var event = localStorage.getItem("event_" + hour);
    // Check if event exists
    if (event) {
      // If yes, set the event description
      $(this).find(".description").val(event);
    }
  });
}
// Save events to local storage
function saveEvent() {
  // Get event data
  var hour = $(this).parent().attr("data-hour"); // Get the hour attribute
  var event = $(this).siblings(".description").val(); // Get the event description
  localStorage.setItem("event_" + hour, event); // Save event to local storage
}
createTimeblocks(); // Calling the createTimeblocks() function
updateHourStyles(); // Call the updateTimeDisplay() function to update the time display when the script is loaded
loadEvents(); // Calling the loadEvents() function

// Update timeblock styles every minute
setInterval(updateHourStyles, 60000);
