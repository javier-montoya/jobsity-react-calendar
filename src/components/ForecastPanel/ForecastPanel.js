import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
  }, [currentReminder.date, currentReminder.city]);

  if (forecasts.fetching) return <CircularProgress />;

  if (forecasts.errorMessage)
    return <Typography>{forecasts.errorMessage}</Typography>;

  if (forecasts.forecastResults.length === 0)
    return (
      <Typography variant="subtitle1">
        No forecasts found for this date
      </Typography>
    );

  const renderForecasts = () => {
    return forecasts.forecastResults.map((forecast, index) => {
      return (
        <Grid item xs={4} md={3} lg={2} key={`forecast-${index}`}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img
              className={classes.weatherIcon}
              src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <Typography variant="body2">{forecast.weather[0].main}</Typography>
            <Typography variant="body2">
              {moment(forecast.dt_txt).format("hh:mm a")}
            </Typography>
          </Grid>
        </Grid>
      );
    });
  };
  return (
    <Paper>
      <Grid container justify="center">
        <Grid container item xs={12} justify="center">
          <Typography variant="h6"> Forecasts for the day: </Typography>
        </Grid>
        {renderForecasts()}
      </Grid>
    </Paper>
  );
};

const styles = () => ({
  weatherIcon: {
    width: "90px",
    height: "90px"
  }
});

export default withStyles(styles)(ForecastPanel);
