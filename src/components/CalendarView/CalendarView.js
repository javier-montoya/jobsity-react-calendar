import React from "react";
import { Grid } from "@material-ui/core";
import Calendar from "../Calendar";

const CalendarView = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={8}>
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default CalendarView;
