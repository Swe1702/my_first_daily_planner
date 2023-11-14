//adds the present day, date and month
var timeDisplayEl = $('#currentDay'); // First, it selects the element with the ID currentDay and stores it in the variable timeDisplayEl.
var rightNow = dayjs().format('dddd , MMMM  D[th] ');// Format the current date and time using dayjs().format('dddd , MMMM D[th] '), where dddd represents the full day name, MMMM represents the full month name, and D[th] represents the day of the month with an ordinal suffix.
timeDisplayEl.text(rightNow); // Set the text of the timeDisplayEl element to the formatted current date and time
