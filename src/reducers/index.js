import { combineReducers } from "redux";
import dateReducer from "./dateReducer";
import reminderDialogReducer from "./reminderDialogReducer";
import reminderReducer from "./reminderReducer";
export default combineReducers({
  currentDates: dateReducer,
  reminderDialog: reminderDialogReducer,
  reminders: reminderReducer
});
