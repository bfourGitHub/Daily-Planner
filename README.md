# Daily-Planner
## Dynamic Daily Planner
The {Object} of the game is to be where you need to be when you need to be there. Now, obviously our personal assistants are there to make sure we meet this goal. However, during my research I discovered that people only have personal assistants in the movies... what a bummer, right? 

This brings us to creating a simple calendar app to keep us on track. This simple application should allow for certain functionality:
    - Saving events for each hour of the day
    - What hour we are currently within 
    - What events have passed 
    - Whats coming up!


The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/App-functionality.gif)


## The Challenges
I think the most challenging part of this assignment for me was localStorage. Localstorage has given me repeated problems, typically I can get something to save to local storage but the issue seems to be getting it back. On this assignment I think I figured out my main issue: I seem to forget that you have to call a function to get it to do what you need. After many console.logs I finally firgured this out. 

I find pseudocoding is extremely helpful because my mind seems to code in reverse (I can explain what I need but remembering the code is the hard part).
Reading documentation for bootstrap was extremely helpful also: it helped sort out the rows and colmns needed for this project layout!
The css style sheet helped sort some things out as well it served as a bit of a roadmap to how the html elements should be classed.



## User Story

Implement the following user story:

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

Aim to meet the following acceptance criteria:

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### Link To Github


### Link to Deployed Application

