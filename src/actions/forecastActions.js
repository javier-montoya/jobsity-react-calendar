import axios from "axios";
import moment from "moment";
import Types from "../actions/types";
const { FETCH_FORECAST } = Types;

const APIKey = "7eb27763529ba50314a32b25c31dfaca";
const APIUrl = "https://api.openweathermap.org/data/2.5/";

export const fetchForecast = (city, date) => dispatch => {
  const momentDate = moment(date);
  const isToday = momentDate.isSame(moment(), "day");
  let fetchPromise = isToday
    ? weatherPromise(city)
    : forecastPomise(city, momentDate);

  return dispatch({
    type: FETCH_FORECAST,
    payload: fetchPromise // redux-promise middleware handles it
  }).catch(error => {
    let errorMessage = "API responded with something weird...";
    if (error.response) {
      if (error.response.status === 404)
        errorMessage = "City name not found, please try a different one";
      else errorMessage = error.response.data.message || errorMessage;
    }
    dispatch({
      type: "FETCH_FORECAST_FAILED",
      payload: errorMessage
    });
  });
};

const forecastPomise = async (city, momentDate) => {
  const url = `${APIUrl}/forecast?q=${city}&appid=${APIKey}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        let forecastList = response.data.list.filter(forecast =>
          moment(forecast.dt_txt).isSame(momentDate, "day")
        );
        resolve(forecastList);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const weatherPromise = async city => {
  const url = `${APIUrl}/weather?q=${city}&appid=${APIKey}`;
  console.log(url);
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        resolve([response.data]);
      })
      .catch(error => {
        reject(error);
      });
  });
};
