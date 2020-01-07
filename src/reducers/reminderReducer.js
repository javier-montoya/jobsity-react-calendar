import moment from "moment";
import Types from "../actions/types";
const {
  CREATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
  UPDATE_REMINDER
} = Types;

const initialState = {
  reminders: [
    {
      date: "2020-01-08T14:33:04-06:00",
      time: "2020-01-08T14:33:04-06:00",
      text: "lorem impsum thats really long",
      color: "#b52f2f",
      city: "London",
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
    case DELETE_REMINDER:
      return {
        reminders: state.reminders.filter(
          reminder => reminder.id !== action.payload.id
        )
      };
    case DELETE_ALL_REMINDERS:
      const payloadDate = moment(action.payload.date);
      return {
        reminders: state.reminders.filter(reminder => {
          return !moment(reminder.date).isSame(payloadDate, "day");
        })
      };
    case UPDATE_REMINDER:
      return {
        reminders: state.reminders.map(reminder => {
          if (reminder.id === action.payload.reminder.id)
            return action.payload.reminder;
          return reminder;
        })
      };
    default:
      return state;
  }
};
