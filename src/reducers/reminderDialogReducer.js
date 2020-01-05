import Types from "../actions/types";
const { OPEN_REMINDER_DIALOG, CLOSE_REMINDER_DIALOG } = Types;

const initialState = {
  open: false,
  selectedReminder: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REMINDER_DIALOG:
      return {
        ...state,
        open: true,
        selectedReminder: action.payload.selectedReminder
      };
    case CLOSE_REMINDER_DIALOG:
      return {
        ...state,
        open: false,
        selectedReminder: null
      };
    default:
      return state;
  }
};
