import React, { useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { CompactPicker } from "react-color";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  Typography,
  Collapse,
  Chip,
  DialogActions
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import { closeReminderDialog } from "../../actions/reminderDialogActions";
import { createReminder } from "../../actions/reminderActions";
import "react-datepicker/dist/react-datepicker.css";

const ReminderDialog = () => {
  const dispatch = useDispatch();

  const open = useSelector(state => state.reminderDialog.open);
  const selectedReminder = useSelector(
    state => state.reminderDialog.selectedReminder
  );

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentErrors, setErrors] = useState({});

  const [selectedText, setSelectedText] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedColor, setSelectedColor] = useState("#2f74b5");
  const [selectedCity, setSelectedCity] = useState("");

  const dialogTitle = selectedReminder ? "Update Reminder" : "Add Reminder";

  const dynamicStyles = makeStyles(() => ({
    currentColor: {
      backgroundColor: selectedColor,
      color: "white"
    },
    gridHeight: {
      minHeight: "300px"
    }
  }));

  const classes = dynamicStyles();

  const handleClose = () => {
    setErrors({});
    dispatch(closeReminderDialog());
    setSelectedText("");
    setSelectedCity("");
    setSelectedDate(new Date());
    setSelectedTime(new Date());
    setShowColorPicker(false);
  };

  const handleSave = () => {
    setErrors({});
    if (!validateForm()) return;

    const reminder = {
      date: selectedDate,
      time: selectedTime,
      text: selectedText,
      color: selectedColor,
      city: selectedCity
    };

    dispatch(createReminder(reminder));
    handleClose();
  };

  const validateForm = () => {
    const isValid =
      selectedText &&
      selectedDate &&
      selectedTime &&
      selectedColor &&
      selectedCity;

    let errors = {};

    if (!isValid) {
      if (!selectedText) {
        errors.text = "Please provide a text body";
      }
      if (!selectedCity) {
        errors.city = "Please provide a city name";
      }
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <Grid className={classes.gridHeight} container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item container xs={6}>
              <Typography>Reminder Date And Time:</Typography>
            </Grid>
            <Grid item container xs={6} justify="space-evenly">
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                customInput={
                  <Button variant="contained" color="primary">
                    {moment(selectedDate).format("MM/DD/YY")}
                  </Button>
                }
                popperPlacement="auto-end"
              />
              <DatePicker
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeInputLabel="Time:"
                selected={selectedTime}
                onChange={date => setSelectedTime(date)}
                customInput={
                  <Button variant="contained" color="primary">
                    {moment(selectedTime).format("h:mm a")}
                  </Button>
                }
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography>Reminder Text:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Max 30 characters"
                id="reminder-text"
                value={selectedText}
                onChange={e => {
                  setSelectedText(e.target.value.slice(0, 30));
                }}
                error={!!currentErrors.text}
                helperText={currentErrors.text}
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography>Reminder Color:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Chip
                onClick={() => setShowColorPicker(!showColorPicker)}
                className={classes.currentColor}
                label={selectedColor}
              />
            </Grid>

            <Collapse in={showColorPicker}>
              <CompactPicker
                color={selectedColor}
                onChange={color => {
                  setSelectedColor(color.hex);
                  setShowColorPicker(false);
                }}
              />
            </Collapse>

            <Grid container alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography>City:</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="e.g. London"
                  id="reminder-city"
                  value={selectedCity}
                  onChange={e => {
                    setSelectedCity(e.target.value);
                  }}
                  error={!!currentErrors.city}
                  helperText={currentErrors.city}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReminderDialog;
