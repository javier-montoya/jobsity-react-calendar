import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import DayBar from "../DayBar";
import MonthChanger from "../MonthChanger";
import CalendarCell from "../CalendarCell";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format());

  const calendarMonth = useSelector(state => state.currentDates.calendarMonth);

  const renderCells = () => {
    const monthStart = moment(calendarMonth).startOf("month");
    const startDate = monthStart.clone().startOf("week");

    const monthEnd = moment(calendarMonth).endOf("month");
    const endDate = monthEnd.clone().endOf("week");

    const rows = [];
    let cells = [];
    let day = startDate.clone();

    while (day.isSameOrBefore(endDate)) {
      for (let i = 0; i < 7; i++) {
        cells.push(
          <CalendarCell
            dateString={day.format()}
            inCurrentMonth={!day.isSame(monthStart, "month")}
          />
        );
        day.add(1, "days");
      }
      rows.push(
        <div className="row" key={day}>
          {" "}
          {cells}{" "}
        </div>
      );
      cells = [];
    }
    return <div className="body">{rows}</div>;
  };

  const onDateClick = day => {
    setSelectedDate(day);
  };
  return (
    <div className="calendar">
      <MonthChanger />
      <DayBar />
      <div>{renderCells()}</div>
    </div>
  );
};
export default Calendar;
