import React, { useState } from 'react'
import Board from './Board'
import moment from 'moment'

export const contextCalander = React.createContext()


export default function Calender() {
  const [startDate, setStartDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment())


  const contextValue = {
    updateStartDate:setStartDate,
    updateEndDate:setEndDate,
    startDate:startDate

  }
  return (
    <contextCalander.Provider value={contextValue}>
      <div className='calender'>
        
          <div className="header grid-item">
            <h1 className='title'>Calender</h1>
            <button className='btn'>x</button>
          </div>
          <div className="nav grid-item">nav</div>
          <Board 
            startDate={startDate}
            endDate={endDate}
          />
          <div className="board2 grid-item">b2</div>
      </div>
    </contextCalander.Provider>
  )
}
