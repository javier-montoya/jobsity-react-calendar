import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
export default combineReducers({
  currentDates: datesReducer
});
