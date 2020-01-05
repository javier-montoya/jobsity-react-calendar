import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CalendarView from "./CalendarView";
import theme from "../themes";
import ReminderDialog from "./ReminderDialog";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReminderDialog />
      <div className="viewContainer body">
        <CalendarView />
      </div>
    </ThemeProvider>
  );
}

export default App;
