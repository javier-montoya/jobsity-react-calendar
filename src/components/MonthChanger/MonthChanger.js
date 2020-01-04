import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Fab } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { setCalendarMonth } from "../../actions/datesActions";

const MonthChanger = ({ classes }) => {
  const dispatch = useDispatch();
  const calendarMonth = useSelector(state => state.currentDates.calendarMonth);

  const nextMonth = () => {
    const newMonth = moment(calendarMonth)
      .add(1, "month")
      .format();
    dispatch(setCalendarMonth(newMonth));
  };
  const prevMonth = () => {
    const newMonth = moment(calendarMonth)
      .subtract(1, "month")
      .format();
    dispatch(setCalendarMonth(newMonth));
  };

  return (
    <div className={classes.botPadding}>
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          item
          xs={6}
          md={4}
          lg={4}
          justify="space-between"
          alignItems="center"
        >
          <Fab
            color="primary"
            aria-label="left-month"
            className={classes.circleButton}
            onClick={prevMonth}
          >
            <ChevronLeft />
          </Fab>
          <Typography variant="h6">
            {moment(calendarMonth).format("MMMM YYYY")}
          </Typography>
          <Fab
            color="primary"
            aria-label="left-month"
            className={classes.circleButton}
            onClick={nextMonth}
          >
            <ChevronRight />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = () => ({
  circleButton: {
    maxWidth: 35,
    maxHeight: 35,
    minHeight: 35
  },
  botPadding: {
    paddingBottom: 28
  }
});

export default withStyles(styles)(MonthChanger);
