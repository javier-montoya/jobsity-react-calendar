import Types from "../actions/types";
const { CREATE_REMINDER } = Types;

const initialState = {
  reminders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return {
        reminders: [...state.reminders, action.payload.reminder]
      };
    default:
      return state;
  }
};
