import React, { useContext } from 'react'
import {contextCalander} from './Calender'

export default function Day({dayNum}) {

  const {
     updateStartDate,
     startDate
  } = useContext(contextCalander)

  function changeDayOfDate(){
    const newDate = startDate.clone().date(dayNum)
    updateStartDate(newDate)
  }
  return (
    <span className='day' onClick={changeDayOfDate}>{dayNum}</span>
  )
}
