import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CalendarView from "./CalendarView";
import theme from "../themes";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="viewContainer body">
        <CalendarView />
      </div>
    </ThemeProvider>
  );
}

export default App;
