##My Workday Scheduler
Homework #5 for UofU Full-Stack Developer Bootcamp

![screenshot of work day planner](assets/screeen-shot-project.png)
This project was created to satisfy these requirements:

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

We were provided with starter HTML and CSS.

Operating instrucions:
Upon page load, the user is provided with a block for each hour of the standard workday. They can click inside the boxes and type in appointments. After hitting the save button, the appointment is entered into localStorage so that it will persist through a refresh or reload of the page. Because after a day, the user will probably want to remove the previous appointments and start a new day, a "Clear Yesterday's Appointments" is included this button will clear Local storage and refresh the page.

