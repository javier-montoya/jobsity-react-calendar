import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Grid, Fab } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";
import Calendar from "../Calendar";
import { openReminderDialog } from "../../actions/reminderDialogActions";

const CalendarView = ({ classes }) => {
  const dispatch = useDispatch();

  const renderAddButton = () => {
    return (
      <Fab
        variant="extended"
        color="primary"
        onClick={() => {
          dispatch(openReminderDialog());
        }}
      >
        <AddIcon />
        Add Reminder
      </Fab>
    );
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={8}>
        <Calendar />
        <Grid container justify="center">
          <Grid item className={classes.topPadding}>
            {renderAddButton()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CalendarView.propTypes = {
  classes: PropTypes.object
};

const styles = () => ({
  topPadding: {
    paddingTop: "35px"
  }
});

export default withStyles(styles)(CalendarView);
