import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import moment from "moment";
import { Grid } from "@material-ui/core";
import ReminderIndicator from "../ReminderIndicator";
import "./CalendarCell.css";

const CalendarCell = ({ dateString, inCurrentMonth }) => {
  const cellDate = moment(dateString);
  const isToday = cellDate.isSame(moment(), "day");
  const isWeekend = cellDate.day() === 0 || cellDate.day() === 6;

  let reminders = useSelector(state => state.reminders.reminders);

  const renderCalendarNumber = () => (
    <div
      className={`number ${!inCurrentMonth && "out-month"} ${isWeekend &&
        "weekend-number"} ${isToday && "today"}`}
    >
      {cellDate.format("D")}
    </div>
  );

  const renderReminders = () => {
    let filteredReminders = reminders
      .filter(reminder => moment(reminder.date).isSame(cellDate, "day"))
      .sort((a, b) => moment(a.time).valueOf() - moment(b.time).valueOf());

    return filteredReminders.map((reminder, index) => {
      return (
        <Grid key={`${dateString}-${index}`} item xs={12}>
          <ReminderIndicator reminder={reminder} />
        </Grid>
      );
    });
  };

  return (
    <div className={`full-width cell ${isWeekend && "weekend-cell"}`}>
      <Grid container className={"custom"} direction="column" justify="center" item>
        <Grid container justify="space-between">
          {renderCalendarNumber()}
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

export default CalendarCell;
