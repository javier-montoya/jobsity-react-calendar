import Types from "../actions/types";
const { SET_CALENDAR_MONTH, SET_SELECTED_DATE } = Types;

export const setCalendarMonth = calendarMonth => dispatch => {
  return dispatch({
    type: SET_CALENDAR_MONTH,
    payload: { calendarMonth }
  });
};

export const setSelectedDate = setSelectedDate => dispatch => {
  return dispatch({
    type: SET_SELECTED_DATE,
    payload: { setSelectedDate }
  });
};
