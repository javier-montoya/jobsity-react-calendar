import Types from "../actions/types";
const { OPEN_REMINDER_DIALOG, CLOSE_REMINDER_DIALOG } = Types;

export const openReminderDialog = reminder => dispatch => {
  return dispatch({
    type: OPEN_REMINDER_DIALOG,
    payload: { selectedReminder: reminder }
  });
};

export const closeReminderDialog = () => dispatch => {
  return dispatch({
    type: CLOSE_REMINDER_DIALOG
  });
};
