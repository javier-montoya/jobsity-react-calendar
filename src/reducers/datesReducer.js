import moment from "moment";

const initialState = {
  calendarMonth: moment().format(),
  selectedDate: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CALENDAR_MONTH':
        return{
            ...state,
            calendarMonth: action.payload.calendarMonth
        }
    case 'SET_SELECTED_DATE':
        return{
            ...state,
            selectedDate: action.payload.selectedDate
        }
    default:
      return state;
  }
};
