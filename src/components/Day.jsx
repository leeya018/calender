import React, { useContext } from 'react'
import {contextCalander} from './Calender'

export default function Day({
  dayNum,
  updateDate}) {

  const {
     startDate
  } = useContext(contextCalander)

  function changeDayOfDate(){
    const newDate = startDate.clone().date(dayNum)
    updateDate(newDate)
  }
  return (
    <span className='day' onClick={changeDayOfDate}>{dayNum}</span>
  )
}
