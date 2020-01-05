import React from "react";
import ReminderDialog from "./ReminderDialog";
import CalendarView from "./CalendarView";
import "./App.css";

const App = () => {
  return (
    <div className="viewContainer body">
      <ReminderDialog />
      <CalendarView />
    </div>
  );
};

export default App;
