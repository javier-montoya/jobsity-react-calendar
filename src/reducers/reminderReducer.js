import Types from "../actions/types";
const { CREATE_REMINDER } = Types;

const initialState = {
  reminders: [
    {
      date: "2020-01-05T14:33:04-06:00",
      time: "2020-01-05T14:33:04-06:00",
      text: "lorem impsum long text that doesnt fit..",
      color: "#2f74b5",
      city: "aaaa",
      id: "1d4dcd6-c6d-2a8a-ef8-6e06edf21eb6"
    }
  ]
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
