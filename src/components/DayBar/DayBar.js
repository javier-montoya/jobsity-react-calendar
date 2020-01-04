import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";

const DayBar = () => {
  const days = [];
  let datePivot = moment().startOf("week");
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {datePivot.format("dddd")}
      </div>
      // <Grid item>
      //   {datePivot.format("dddd")}
      // </Grid>
    );
    datePivot.add(1, "day");
  }
  return <div className="days row">{days}</div>;
};

export default DayBar;
