# jobsity-react-calendar

Calendar application built entirely using React Hooks.

## Tools Used
- **React** was the framework used, as well as its **React Hooks**
- **Redux** for stage management
- Notorious middlewares such as **redux-thunk** and **redux-promise**
- Testing was done with **Jest** and **Enzyme**
- Styling done with **Material UI** and **CSS**
- Time parsing using **moment**
- Some other ui components such as **react-datepicker**

## Running it
Go to the root directory of this project and install packages with ```npm install```
Running  ``` npm run start``` kicks off the project

## Tests
As mentioned before, tests were done using **Jest** and **Enzyme**
We are testing three major cases:
- Ability to add new reminders
- Validation for the 30 character limit in the reminder body
- Required fields must be provided for the creation process to continue

To run tests simply:   ```npm run test``` 

## Achieved Scope
The project includes **all** mandatory and bonus features across **two different views**

### Calendar view contains the following functionalities
-	Create new reminders with all the required parameters by clicking **+ Add Reminder**
-	Displays reminders ordered by time
-	Color selection for reminders, as well as displaying them in said color
-	(Optional) Calendar handles more than one month
-	(Optional) Calendar cells scroll to properly handle  
-	(Optional) Delete all reminders in a day by clicking the **[x]** button in a calendar cell

### Calendar details (accessible after clicking a reminder)
-	Edit the current reminder
-	Has a weather service to [Open Weather Map](https://openweathermap.org/forecast16)
-  (Optional) Delete the current reminder (this takes us back to the calendar)