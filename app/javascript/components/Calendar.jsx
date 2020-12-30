import React from "react";
import {
  startOfMonth,
  startOfWeek,
  lastDayOfMonth,
  lastDayOfWeek,
  addDays,
} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Calendar = () => {
  const dateUnderInspection = new Date();
  const monthName = dateUnderInspection.toLocaleString("default", {
    month: "long",
  });
  const firstDate = startOfWeek(startOfMonth(dateUnderInspection));
  const lastDate = lastDayOfWeek(lastDayOfMonth(dateUnderInspection));
  const dates = [];
  let currentDate = firstDate;
  while (currentDate <= lastDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  const daysInWeek = 7;
  const datesByWeeks = [];
  let i = 0;
  const j = dates.length;
  while (i < j) {
    datesByWeeks.push(dates.slice(i, i + daysInWeek));
    i += daysInWeek;
  }

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="fit-content">
      <div className="w-full">
        <div className="flex text-2xl items-center w-full justify-around">
          <FontAwesomeIcon icon={faAngleLeft} />
          <div>{monthName}</div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="flex fit-content">
        {daysOfWeek.map((day) => (
          <div className="w-20 h-12 flex justify-center items-center text-xl">
            {day}
          </div>
        ))}
      </div>
      {datesByWeeks.map((datesByWeek, row) => (
        <div className="flex week-row fit-content">
          {datesByWeek.map((date) => (
            <div
              className={`w-20 h-24 flex justify-center items-center text-xl border-b-4 border-r-4 first:border-l-4 ${
                row == 0 && "border-t-4"
              }`}
            >
              <div>{date.getDate()}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
