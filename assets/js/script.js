//adds the present day, date and month
var timeDisplayEl = $('#currentDay'); // First, it selects the element with the ID currentDay and stores it in the variable timeDisplayEl.
var rightNow = dayjs().format('dddd , MMMM  D[th] ');// Format the current date and time using dayjs().format('dddd , MMMM D[th] '), where dddd represents the full day name, MMMM represents the full month name, and D[th] represents the day of the month with an ordinal suffix.
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
  updateHourStyles();// Call the updateTimeDisplay() function to update the time display when the script is loaded  