import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/styles/withStyles";
import { fetchForecast } from "../../actions/forecastActions";

const ForecastPanel = ({ classes }) => {
  const dispatch = useDispatch();
  const currentReminder = useSelector(state => state.currentReminder.reminder);
  const forecasts = useSelector(state => state.forecasts);

  useEffect(() => {
    dispatch(fetchForecast(currentReminder.city, currentReminder.date));
  }, []);

  if (forecasts.fetching) return <CircularProgress />;

  if (forecasts.errorMessage)
    return <Typography>{forecasts.errorMessage}</Typography>;

  const renderForecasts = () => {
    return forecasts.forecastResults.map(forecast => {
      return (
        <Grid item xs={6} md={4} lg={2}>
          <Grid
            container
            direction="column"
            justify="center"
            aligntItems="center"
          >
            <Typography variant="body2">
              {moment(forecast.dt_txt).format("hh:mm a")}
            </Typography>
            <img
              className={classes.weatherIcon}
              src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <Typography variant="body2">{forecast.weather[0].main}</Typography>
          </Grid>
        </Grid>
      );
    });
  };
  return (
    <Grid container justify="center">
      <Grid container item xs={12} justify="center">
        <Typography variant="h6"> Forecasts for the day: </Typography>
      </Grid>
      {renderForecasts()}
    </Grid>
  );
};

const styles = () => ({
  weatherIcon: {
    width: "90px",
    height: "90px"
  }
});

export default withStyles(styles)(ForecastPanel);
