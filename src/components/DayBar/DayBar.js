import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import "./DayBar.css";

const DayBar = () => {
  const days = [];
  let datePivot = moment().startOf("week");

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="full-width day" key={i}>
        {datePivot.format("dddd")}
      </div>
    );
    datePivot.add(1, "day");
  }

  return <Grid container>{days}</Grid>;
};

export default DayBar;
