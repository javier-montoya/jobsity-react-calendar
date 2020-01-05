import moment from "moment";
import uuid from "react-uuid";
import Types from "../actions/types";
const { CREATE_REMINDER } = Types;

export const createReminder = reminder => dispatch => {
  let newReminder = reminder;
  newReminder.date = moment(reminder.date).format();
  newReminder.time = moment(reminder.time).format();
  newReminder.id = uuid();

  return dispatch({
    type: CREATE_REMINDER,
    payload: { reminder: newReminder }
  });
};
