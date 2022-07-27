import React, { useEffect, useState, useContext } from "react";
import Day from "./Day";
import {contextCalander} from "./Calender"

const DAYS = [...Array(30).keys()];
const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
    'Jan', 'Feb',
    'Mar', 'Apr',
    'May', 'June',
    'July', 'Aug',
    'Sept', 'Oct',
    'Nov', 'Dec'
];

const YEARS =[
    2022,
    2021,
    2020,
]

export default function Board({startDate}) {

    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(2022)


    useEffect(() => { 
        let startDate_copy = new Date(startDate)
        startDate_copy.setMonth(month)
        updateStartDate(startDate_copy)
     }, [month])

    const {
        updateStartDate
    } =  useContext(contextCalander)

  function spreadWeekDays() {
    return WeekDays.map((wd) => <span>{wd.substring(0, 3)}</span>);
  }

  function spreadDays() {
    return DAYS.map((day) => <Day dayNum={day}/>);
  }


  function getMonth(){
    return MONTHS[startDate.getMonth()]
  }
  return (
    <div className="board board1 grid-item">
      <div className="nav-board">
        <span>from: </span>
        <select 
            value={month}
            onChange={e => setMonth(e.target.value)}
         >
            {
                MONTHS.map((m , i) => <option value={i}>{m}</option>)
            }
        </select>
        <select 
            value={year}
            onChange={e => setYear(e.target.value)}
         >
            {
                YEARS.map((y) => <option value={y}>{y}</option>)
            }
        </select>
      </div>
      <div className="days"></div>
      <div className="days-numbers">
        {spreadWeekDays()}
        {spreadDays()}
      </div>
    </div>
  );
}
