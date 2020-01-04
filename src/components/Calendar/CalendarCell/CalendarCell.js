import React from "react";
import moment from "moment";
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import "./CalendarCell.css";

const CalendarCell = ({ classes, dateString, inCurrentMonth }) => {
  const cellDate = moment(dateString);
  const isToday = cellDate.isSame(moment(), "day");
  const isWeekend = cellDate.day() === 0 || cellDate.day() === 6;

  return (
    <div
      className={`full-width cell ${isWeekend && "weekend-cell"}`}
      onClick={() => console.log("date clicked: ", dateString)}
    >
      <Grid container direction="column" justify="center">
        <Grid container direction="row">
          <div
            className={`number ${!inCurrentMonth && "out-month"} ${isWeekend &&
              "weekend-number"} ${isToday && "today"}`}
          >
            {cellDate.format("D")}
          </div>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = () => ({});

export default withStyles(styles)(CalendarCell);
