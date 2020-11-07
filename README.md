[![favicon.png](https://i.postimg.cc/nczRDRfP/favicon.png)](https://postimg.cc/XXRkMgJf)
# TimeBlock

_Developed by_
Brenda Goodwin  brendanced@gmail.com

See the app live at https://brendancer.github.io/TimeBlock/

![screenshot of work day planner](/assets/ScreenShot.png)

TimeBlock is an app designed to enable the user to record their tasks and appointments during the typical work day on a daily basis. The blocks are color-coded to show past, present, and future hours. User entries will persist each time they visit the app, with an option to clear appointments to start the day fresh. TimeBlock features clean design that is simple, calm, and easy on the eyes.

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

## Technologies used

- css/html
- javascript
- jquery
- bootstrap
- moment.js


## Operating Instrucions:

Upon page load, the user is provided with a block for each hour of the standard workday.

- Click inside the boxes and type in appointments.
  - _a textarea box appears to collect your appointment data_
- Click the save button
  - _your appt is stored in local storage_
- To clear previous appointments and start a new day, click "Clear Yesterday's Appointments"
  - _local storage is cleared and page is reloaded_
  
  ## License (MIT)
  
  Copyright 2020 Brenda Goodwin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
