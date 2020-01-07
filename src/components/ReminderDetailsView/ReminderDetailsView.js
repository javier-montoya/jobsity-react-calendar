import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import BackIcon from "@material-ui/icons/ArrowBack";
import ReminderForm from "../ReminderForm";
import ForecastPanel from "../ForecastPanel";
import {
  removeCurrentReminder,
  setCurrentReminder
} from "../../actions/currentReminderActions";
import { deleteReminder, updateReminder } from "../../actions/reminderActions";

const ReminderDetails = () => {
  const dispatch = useDispatch();
  const currentReminder = useSelector(state => state.currentReminder.reminder);
  const prettyDate = moment(currentReminder.date).format("MMMM Do YYYY");
  const prettyTime = moment(currentReminder.time).format("hh:mm a");
  const onSubmit = reminder => {
    dispatch(updateReminder(reminder));
    dispatch(setCurrentReminder(reminder));
  };

  return (
    <Grid
      container
      spacing={8}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        item
        xs={12}
        md={9}
        lg={6}
        direction="row"
        justify="space-evenly"
      >
        <Fab
          color="primary"
          aria-label="back"
          onClick={() => {
            dispatch(removeCurrentReminder());
          }}
        >
          <BackIcon />
        </Fab>
        <Typography variant="h6">{`${prettyDate}, reminder at ${prettyTime}`}</Typography>
        <Fab
          color="secondary"
          aria-label="back"
          onClick={() => {
            dispatch(deleteReminder(currentReminder.id));
            dispatch(removeCurrentReminder());
          }}
        >
          <DeleteIcon />
        </Fab>
      </Grid>
      <Grid item xs={12} md={9} lg={6}>
        <ReminderForm
          submitButtonText="Update"
          submitCallback={onSubmit}
          reminder={currentReminder}
        />
      </Grid>
      <Grid item xs={12} md={9} lg={6}>
        <ForecastPanel />
      </Grid>
    </Grid>
  );
};

export default ReminderDetails;
