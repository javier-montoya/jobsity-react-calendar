import React from "react";
import moment from "moment";

const DayBar = () => {
  const days = [];
  let datePivot = moment().startOf("week");
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {datePivot.format("dddd")}
      </div>
    );
    datePivot.add(1, "day");
  }
  return <div className="days row">{days}</div>;
};

export default DayBar;
