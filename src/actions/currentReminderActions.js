import Types from "../actions/types";
const { SET_CURRENT_REMINDER, REMOVE_CURRENT_REMINDER } = Types;

export const setCurrentReminder = reminder => dispatch => {
  return dispatch({
    type: SET_CURRENT_REMINDER,
    payload: { reminder }
  });
};

export const removeCurrentReminder = () => dispatch => {
  return dispatch({
    type: REMOVE_CURRENT_REMINDER
  });
};
