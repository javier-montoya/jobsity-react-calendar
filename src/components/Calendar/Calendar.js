import React, { useState } from "react";
import moment from "moment";
import "./Calendar.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format());
  const [selectedDate, setSelectedDate] = useState(moment().format());

  const dateChanger = () => {
    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="column col-center">
          <span>{moment(currentMonth).format("MMMM YYYY")}</span>
        </div>
        <div className="column col-end">
          <div className="icon" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const dayBar = () => {
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

  const cells = () => {
    const monthStart = moment(currentMonth).startOf("month");
    const startDate = monthStart.clone().startOf("week");

    const monthEnd = moment(currentMonth).endOf("month");
    const endDate = monthEnd.clone().endOf("week");

    const rows = [];
    let days = [];
    let day = startDate.clone();
    let formattedDate = "";

    while (day.isSameOrBefore(endDate)) {
      for (let i = 0; i < 7; i++) {
        formattedDate = day.format("D");
        const cloneDay = day.clone();
        days.push(
          <div
            className={`column cell ${
              !day.isSame(monthStart, "month")
                ? "disabled"
                : day.isSame(selectedDate, "day")
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay.toDate())}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day.add(1, "days");
      }
      rows.push(
        <div className="row" key={day}>
          {" "}
          {days}{" "}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, "month"));
  };
  const prevMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract(1, "month"));
  };
  const onDateClick = day => {
    setSelectedDate(day);
  };
  return (
    <div className="calendar">
      <div>{dateChanger()}</div>
      <div>{dayBar()}</div> 
      <div>{cells()}</div>
    </div>
  );
};
export default Calendar;
