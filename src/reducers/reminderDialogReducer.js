import Types from "../actions/types";
const { OPEN_REMINDER_DIALOG, CLOSE_REMINDER_DIALOG } = Types;

const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REMINDER_DIALOG:
      return {
        ...state,
        open: true
      };
    case CLOSE_REMINDER_DIALOG:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};
