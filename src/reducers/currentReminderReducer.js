import Types from "../actions/types";
const { SET_CURRENT_REMINDER, REMOVE_CURRENT_REMINDER } = Types;

const initialState = {
  reminder: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_REMINDER:
      return {
        ...state,
        reminder: action.payload.reminder
      };
    case REMOVE_CURRENT_REMINDER:
      return {
        ...state,
        reminder: null
      };
    default:
      return state;
  }
};
