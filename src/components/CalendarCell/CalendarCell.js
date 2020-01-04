import React from "react";
import moment from "moment";

const CalendarCell = props => {
  const { dateString, inCurrentMonth } = props;
  const cellDate = moment(dateString);
  const isToday = cellDate.isSame(moment(), "day");

  return (
    <div
      className={`column cell`}
      key={dateString}
      onClick={() => console.log("date clicked: ", dateString)}
    >
      <span className="number">{cellDate.format("D")}</span>
    </div>
  );
};

export default CalendarCell;
