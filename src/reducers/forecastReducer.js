// import Types from "../actions/types";
// const { FETCH_FORECAST } = Types;

const initialState = {
  forecastResults: [],
  errorMessage: null,
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FORECAST_PENDING":
      return {
        ...state,
        forecastResults: [],
        fetching: true,
        errorMessage: null
      };
    case "FETCH_FORECAST_FULFILLED":
      return {
        ...state,
        forecastResults: action.payload,
        fetching: false
      };
    case "FETCH_FORECAST_FAILED":
      return {
        ...state,
        forecastResults: [],
        fetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
