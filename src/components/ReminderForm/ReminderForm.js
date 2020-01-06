import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import uuid from "react-uuid";
import { CompactPicker } from "react-color";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Collapse
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReminderForm = ({
  submitCallback,
  reminder,
  submitButtonText = "save"
}) => {
  const defaultColor = "#16a5a5";
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentErrors, setErrors] = useState({});

  const selectedId = reminder ? reminder.id : uuid();
  const [selectedText, setSelectedText] = useState(
    reminder ? reminder.text : ""
  );
  const [selectedCity, setSelectedCity] = useState(
    reminder ? reminder.city : ""
  );
  const [selectedDate, setSelectedDate] = useState(
    reminder ? new Date(reminder.date) : new Date()
  );
  const [selectedTime, setSelectedTime] = useState(
    reminder ? new Date(reminder.time) : new Date()
  );
  const [selectedColor, setSelectedColor] = useState(
    reminder ? reminder.color : defaultColor
  );

  const dynamicStyles = makeStyles(() => ({
    currentColor: {
      backgroundColor: selectedColor, // reason why styles had to be made dynamically
      color: "white"
    },
    gridHeight: {
      minHeight: "300px"
    }
  }));

  const classes = dynamicStyles();

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

  // const resetDefaults = () => {
  //   setErrors({});
  //   setSelectedText(reminder ? reminder.text : "");
  //   setSelectedCity(reminder ? reminder.city : "");
  //   setSelectedCity(reminder ? reminder.color : defaultColor);
  //   setSelectedDate(reminder ? new Date(reminder.date) : new Date());
  //   setSelectedTime(reminder ? new Date(reminder.time) : new Date());
  //   setShowColorPicker(false);
  // };

  const handleSave = () => {
    setErrors({});
    if (!validateForm()) return;

    const newlyFormedReminder = {
      date: selectedDate,
      time: selectedTime,
      text: selectedText,
      color: selectedColor,
      city: selectedCity,
      id: selectedId
    };

    submitCallback(newlyFormedReminder);
  };

  return (
    <Grid className={classes.gridHeight} container>
      <Grid container justify="space-between" alignItems="center">
        <Grid item container xs={5}>
          <Typography>Date And Time:</Typography>
        </Grid>
        <Grid item container xs={7} justify="space-evenly">
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
        <Grid item xs={12} sm={5}>
          <Typography>Reminder Text:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
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
        <Grid item xs={5}>
          <Typography>Reminder Color:</Typography>
        </Grid>
        <Grid container item xs={7} justify="center">
          <Button
            variant="contained"
            className={classes.currentColor}
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
            {selectedColor}
          </Button>
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
          <Grid item xs={12} sm={5}>
            <Typography>Reminder City:</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
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

      <Grid container justify="flex-end">
        <Grid item>
          <Button onClick={handleSave}>{submitButtonText}</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

ReminderForm.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string,
  reminder: PropTypes.object
};

export default ReminderForm;
