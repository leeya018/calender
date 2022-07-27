import { relativeTimeRounding } from 'moment'
import React, { useContext } from 'react'
import {contextCalander} from './Calender'

export default function Day({
  day,
  updateDate}) {

  const {
     startDate
  } = useContext(contextCalander)

  function beforeToday(){
    return day.isBefore(new Date(), "day")
  }

  function isToday(){
    return day.isSame(new Date() , "day")
  }

  function isSelected(){
    return day.isSame(startDate, "day")
  }

  function getStyles(){
    if(beforeToday()) return "before"
    if(isToday()) return "today"
    if(isSelected()) return "selected"
    return ""
  }

  function changeDayOfDate(){
    updateDate(day)
  }
  return (
    <span className={getStyles()} onClick={changeDayOfDate}>{day.format('DD')}</span>
  )
}
