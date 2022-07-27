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

export default function Board({startDate}) {

    const [month, setMonth] = useState(startDate.month())
    const [year, setYear] = useState(startDate.year())
    const [daysOfMonth, setDaysOfMonth] = useState([])
    

    useEffect(() => {
      let daysArr = buildDays(startDate)
      console.log(daysArr)
      setDaysOfMonth(daysArr)
   }, [])


   useEffect(() => {
    let daysArr = buildDays(startDate)
    setDaysOfMonth(daysArr)
 }, [month, year])



    useEffect(() => { 
        let startDateClone = startDate.clone().month(month)
        updateStartDate(startDateClone)
     }, [month])

     
    useEffect(() => { 
      let startDateClone = startDate.clone().year(year)
      updateStartDate(startDateClone)
   }, [year])

//    useEffect(() => {
//     let daysArr = buildDays(startDate)
//     setDaysOfMonth(daysArr)
//  }, [year, month])

    const {
        updateStartDate
    } =  useContext(contextCalander)

  function spreadWeekDays() {
    return WeekDays.map((wd) => <span>{wd.substring(0, 3)}</span>);
  }

  function spreadDays() {
    return daysOfMonth.map((day) => <Day dayNum={day.format('DD')}/>);
  }


  // function getMonth(){
  //   return MONTHS[startDate.getMonth()]
  // }
  return (
    <div className="board board1 grid-item">
      <div className="nav-board">
        <span>from: </span>
        {startDate.format("DD-MM-YYYY")}
     
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
