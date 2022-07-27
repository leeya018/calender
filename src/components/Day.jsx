import { relativeTimeRounding } from 'moment'
import React, { useContext } from 'react'
import {contextCalander} from './Calender'

export default function Day({
  day,
  updateDate,
  setSelect,
  select
}) {

  const {
     startDate,
     range
  } = useContext(contextCalander)
  

  function beforeToday(){
    return day.isBefore(new Date(), "day")
  }

  function isToday(){
    return day.isSame(new Date() , "day")
  }

  function isSelected(){
    let [start, end ] = range
    if(start!==null && end!==null ){
      if((day.isAfter(start) || day.isSame(start, "day")) &&
       day.isBefore(end) || day.isSame(end , "day")){
        return true
      }
    }else if(start !== null){
      let abada =  day.isSame(start, "day")
      return abada 
    }else if(end !== null ){
      return day.isSame(end, "day")
    }
      return false
    }
  
  function getStyles(){
    // if(beforeToday()) return "before"
    if(isToday()) return "today"
    if(isSelected()) return "selected"
    return ""
  }

  function changeDayOfDate(){
    updateDate(day)
    setSelect(!select)
  }
  return (
    <span className={getStyles()} onClick={changeDayOfDate}>{day.format('DD')}</span>
  )
}
