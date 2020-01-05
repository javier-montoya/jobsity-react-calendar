import moment from "moment";
import uuid from "react-uuid";
import Types from "../actions/types";
const { CREATE_REMINDER } = Types;

export const createReminder = reminder => dispatch => {
  // date, time, text, color, city
  let newReminder = reminder;
  newReminder.date = moment(reminder.date).format("MM/DD/YY");
  newReminder.date = moment(reminder.time).format("h:mm a");
  newReminder.id = uuid();

  return dispatch({
    type: CREATE_REMINDER,
    payload: { reminder: newReminder }
  });
};
