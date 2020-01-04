import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Paper, Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import DayBar from "./DayBar";
import MonthChanger from "./MonthChanger";
import CalendarCell from "./CalendarCell";

const Calendar = ({ classes }) => {
  const calendarMonth = useSelector(state => state.currentDates.calendarMonth);

  const renderCells = () => {
    const monthStart = moment(calendarMonth).startOf("month");
    const startDate = monthStart.clone().startOf("week");

    const monthEnd = moment(calendarMonth).endOf("month");
    const endDate = monthEnd.clone().endOf("week");

    const rows = [];
    let cells = [];
    let day = startDate.clone();

    while (day.isSameOrBefore(endDate)) {
      for (let i = 0; i < 7; i++) {
        cells.push(
          <CalendarCell
            key={day.format()}
            dateString={day.format()}
            inCurrentMonth={day.isSame(monthStart, "month")}
          />
        );
        day.add(1, "days");
      }

      rows.push(
        <Grid
          key={`calendar_row_${rows.length}`}
          className={classes.gridLine}
          container
        >
          {cells}
        </Grid>
      );
      cells = [];
    }
    return rows;
  };

  return (
    <>
      <MonthChanger />
      <Paper>
        <DayBar />
        {renderCells()}
      </Paper>
    </>
  );
};

const styles = () => ({
  gridLine: {
    borderLeft: "1px solid darkgray"
  }
});

export default withStyles(styles)(Calendar);
