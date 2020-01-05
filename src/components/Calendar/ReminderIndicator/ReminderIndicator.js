import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const ReminderIndicator = ({ reminder }) => {
  const dynamicStyles = makeStyles(() => ({
    circleButton: {
      width: "100%",
      height: "20px",
      boxShadow: "none",
      padding: "0px 2px",
      color: "white",
      textTransform: "none",
      backgroundColor: reminder.color // the reason we had to "makeStyles" dynamically
    },
    gridItem: {
      overflow: "hidden"
    }
  }));

  const classes = dynamicStyles();
  const formattedTime = moment(reminder.time).format("H:mm");

  return (
    <Button className={classes.circleButton}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={3} className={classes.gridItem}>
          <Typography noWrap variant="caption">
            {formattedTime}
          </Typography>
        </Grid>
        <Grid item xs={9} className={classes.gridItem}>
          <Typography noWrap variant="caption">
            {reminder.text}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

ReminderIndicator.propTypes = {
  reminder: PropTypes.object.isRequired
};

export default ReminderIndicator;
