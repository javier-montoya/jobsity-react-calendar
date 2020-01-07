import moment from "moment";
import Types from "../actions/types";
const {
  CREATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
  UPDATE_REMINDER
} = Types;

export const createReminder = reminder => dispatch => {
  let newReminder = reminder;
  newReminder.date = moment(reminder.date).format();
  newReminder.time = moment(reminder.time).format();
  return dispatch({
    type: CREATE_REMINDER,
    payload: { reminder: newReminder }
  });
};

export const updateReminder = reminder => dispatch => {
  let newReminder = reminder;
  newReminder.date = moment(reminder.date).format();
  newReminder.time = moment(reminder.time).format();
  return dispatch({
    type: UPDATE_REMINDER,
    payload: { reminder }
  });
};

export const deleteReminder = id => dispatch => {
  return dispatch({
    type: DELETE_REMINDER,
    payload: { id }
  });
};

export const deleteAllReminders = date => dispatch => {
  return dispatch({
    type: DELETE_ALL_REMINDERS,
    payload: { date }
  });
};
