import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import reminderDialogReducer from "./reminderDialogReducer";
export default combineReducers({
  currentDates: datesReducer,
  reminderDialog: reminderDialogReducer
});
