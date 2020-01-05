import Types from "../actions/types";
const { OPEN_REMINDER_DIALOG, CLOSE_REMINDER_DIALOG } = Types;

export const openReminderDialog = () => dispatch => {
  return dispatch({
    type: OPEN_REMINDER_DIALOG
  });
};

export const closeReminderDialog = () => dispatch => {
  return dispatch({
    type: CLOSE_REMINDER_DIALOG
  });
};
