import React from "react";
import { useSelector } from "react-redux";
import ReminderDialog from "./ReminderDialog";
import CalendarView from "./CalendarView";
import ReminderDetailsView from "./ReminderDetailsView";
import "./App.css";

const App = () => {
  const currentReminder = useSelector(state => state.currentReminder.reminder);

  const renderCurrentView = () => {
    if (currentReminder) return <ReminderDetailsView />;
    return <CalendarView />;
  };

  return (
    <div className="viewContainer body">
      <ReminderDialog />
      {renderCurrentView()}
    </div>
  );
};

export default App;
