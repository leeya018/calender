import React, { useEffect, useState, useContext } from "react";
import Day from "./Day";
import {contextCalander} from "./Calender"
import buildDays from "./buildDays"

import moment from 'moment'
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

export default function Board({
  date,
  updateDate 
}) {

    const [month, setMonth] = useState(date.month())
    const [year, setYear] = useState(date.year())
    const [daysOfMonth, setDaysOfMonth] = useState([])

    useEffect(() => {
      let daysArr = buildDays(date)
      console.log(daysArr)
      setDaysOfMonth(daysArr)
   }, [])


   useEffect(() => { 
    const newDate =  date.clone().month(month)
    // alert(newDate)
      updateDate(newDate)
    }, [month, year])


   useEffect(() => {
    let daysArr = buildDays(date)
    setDaysOfMonth(daysArr)
 }, [month, year])



    useEffect(() => { 
        let dateClone = date.clone().month(month)
        updateDate(dateClone)
     }, [month])

     
    useEffect(() => { 
      let dateClone = date.clone().year(year)
      updateDate(dateClone)
   }, [year])



  function spreadWeekDays() {
    return WeekDays.map((wd) => <span>{wd.substring(0, 3)}</span>);
  }

  function spreadDays() {
    return daysOfMonth.map((day) => <Day 
      day={day}
      updateDate={updateDate}
    />);
  }

  return (
    <>
      <div className="nav-board">
        <span>from: </span>
        {date.format("DD-MM-YYYY")}
     
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
    </>
  );
}
