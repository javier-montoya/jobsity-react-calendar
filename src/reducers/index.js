import { combineReducers } from "redux";
import dateReducer from "./dateReducer";
import reminderDialogReducer from "./reminderDialogReducer";
import reminderReducer from "./reminderReducer";
import currentReminderReducer from "./currentReminderReducer";
export default combineReducers({
  currentDates: dateReducer,
  reminderDialog: reminderDialogReducer,
  reminders: reminderReducer,
  currentReminder: currentReminderReducer
});
