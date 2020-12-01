// Get the current date
var today = moment();
console.log(today);
// Display the current date in the JumboTron
var currentDay = $("#currentDay").text(today.format("[Today is] dddd, MMMM Do"));
console.log(currentDay);

// Get the current hour of the day so we can later define if it is in the past, present or future
var currentHour = parseInt(today.format("k"));
console.log(currentHour);


// Determining if a timeblock is in the past present or future and assigning a class


