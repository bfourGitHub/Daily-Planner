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
var ppfTime = $(".ppfTime");
    console.log(ppfTime);
var timeSlotHour = $(".hour");
    console.log(timeSlotHour);

//For loop to go through each hour of the day
for (var i = 0; i < 9; i++) {
    var currentTimeBlock = $(timeSlotHour[i]).attr("data-time");
    console.log(currentTimeBlock);
    console.log("tom daley");
    if (currentTimeBlock < currentHour) {
        $(ppfTime[i]).addClass("past");
    } 
    else if (currentTimeBlock === currentHour) {
        $(ppfTime[i]).addClass("present");
    }
    else if (currentTimeBlock > currentHour) {
        $(ppfTime[i]).addClass("future");
    }
};

// if statment to assign past present or future class to a given time slot


// Saving input data to local storage with click event listener