// Get the current date
var today = moment();
    //console.log(today);
// Display the current date in the JumboTron
var currentDay = $("#currentDay").text(today.format("[Today is] dddd, MMMM Do"));
    //console.log(currentDay);

// Get the current hour of the day so we can later define if it is in the past, present or future
var currentHour = parseInt(today.format("k"));
    //console.log(currentHour);


// Determining if a timeblock is in the past present or future and assigning a class
var ppfTime = $(".ppfTime");
   // console.log(ppfTime);
var timeSlotHour = $(".hour");
    //console.log(timeSlotHour);

//For loop to go through each hour of the day
for (var i = 0; i < 9; i++) {
    var currentTimeBlock = $(timeSlotHour[i]).attr("data-time");
    //console.log(currentTimeBlock);
    //console.log("tom daley");
    // if statment to assign past present or future class to a given time slot
    if (currentTimeBlock < currentHour) {
        $(ppfTime[i]).addClass("past");
    } 
    else if (currentTimeBlock == currentHour) {
        $(ppfTime[i]).addClass("present");
    }
    else if (currentTimeBlock > currentHour) {
        $(ppfTime[i]).addClass("future");
    }
};


// Saving input data to local storage with click event listener
var savedEventBtn = $(".saveBtn");
savedEventBtn.on("click", function (event) {
    //event.preventDefault();
    var clickedButton = $(this);
    var hourButtonClicked = $(clickedButton).siblings("div").data("time");
    var eventInput = $(clickedButton).prev("textarea").val();
    localStorage.setItem("scheduled-hour-" + hourButtonClicked, eventInput);
    console.log(hourButtonClicked);
    console.log(clickedButton);
    console.log("Taylorswift");
});
//get the saved text back after the page is reloaded
// function getSavedEvent() {
//     for (var i = 9; i < 18; i++) {
//         eventSaved = $("#saved-event-" + i);
//         var savedEventText = localStorage.getItem("scheduled-hour-" + i, "eventInput");
        
//         eventSaved.text(savedEventText);
//     }
// }

function myFunction() {
    var x = localStorage.getItem("scheduled-hour-11");
    document.getElementById("saved-event-11").innerHTML = x;
    console.log(x);
  };
  myFunction();