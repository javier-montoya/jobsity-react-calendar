import React from "react";
import moment from "moment";
import { setCalendarMonth } from "../../actions/datesActions";
import { useSelector, useDispatch } from "react-redux";

const MonthChanger = () => {
  const dispatch = useDispatch();
  const calendarMonth = useSelector(state => state.currentDates.calendarMonth);

  const nextMonth = () => {
    const newMonth = moment(calendarMonth)
      .add(1, "month")
      .format();
    dispatch(setCalendarMonth(newMonth));
  };
  const prevMonth = () => {
    const newMonth = moment(calendarMonth)
      .subtract(1, "month")
      .format();
    dispatch(setCalendarMonth(newMonth));
  };

  return (
    <div className="header row flex-middle">
      <div className="column col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="column col-center">
        <span>{moment(calendarMonth).format("MMMM YYYY")}</span>
      </div>
      <div className="column col-end">
        <div className="icon" onClick={nextMonth}>
          chevron_right
        </div>
      </div>
    </div>
  );
};

export default MonthChanger;
