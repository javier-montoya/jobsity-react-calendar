import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Grid, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import ReminderIndicator from "../ReminderIndicator";
import { deleteAllReminders } from "../../../actions/reminderActions";
import "./CalendarCell.css";

const CalendarCell = ({ dateString, inCurrentMonth, classes }) => {
  const dispatch = useDispatch();
  const cellDate = moment(dateString);
  const isToday = cellDate.isSame(moment(), "day");
  const isWeekend = cellDate.day() === 0 || cellDate.day() === 6;

  let reminders = useSelector(state => state.reminders.reminders)
    .filter(reminder => moment(reminder.date).isSame(cellDate, "day"))
    .sort((a, b) => moment(a.time).valueOf() - moment(b.time).valueOf());

  const renderCalendarNumber = () => (
    <div
      className={`number ${!inCurrentMonth && "out-month"} ${isWeekend &&
        "weekend-number"} ${isToday && "today"}`}
    >
      {cellDate.format("D")}
    </div>
  );

  const renderDeleteAllButton = () => {
    if (reminders.length === 0) return null;

    return (
      <Button
        className={classes.smallButton}
        color="secondary"
        variant="contained"
        onClick={() => {
          dispatch(deleteAllReminders(dateString));
        }}
      >
        x
      </Button>
    );
  };

  const renderReminders = () => {
    return reminders.map((reminder, index) => {
      return (
        <Grid key={`${dateString}-${index}`} item xs={12}>
          <ReminderIndicator reminder={reminder} />
        </Grid>
      );
    });
  };

  return (
    <div className={`full-width cell ${isWeekend && "weekend-cell"}`}>
      <Grid container direction="column" justify="center" item xs={12}>
        <Grid container justify="space-between">
          <Grid container direction="row" justify="space-between">
            {renderCalendarNumber()}
            {renderDeleteAllButton()}
          </Grid>
          {renderReminders()}
        </Grid>
      </Grid>
    </div>
  );
};

CalendarCell.propTypes = {
  dateString: PropTypes.string.isRequired,
  inCurrentMonth: PropTypes.bool.isRequired
};

const styles = () => ({
  smallButton: {
    padding: "unset",
    marginRight: "8px",
    minWidth: "20px",
    height: "20px"
  }
});

// export default CalendarCell;
export default withStyles(styles)(CalendarCell);
