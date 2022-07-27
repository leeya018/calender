import React, { useState } from 'react'
import Board from './Board'

export const contextCalander = React.createContext()


export default function Calender() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())


  const contextValue = {
    updateStartDate:setStartDate,
    updateEndDate:setEndDate,

  }
  return (
    <contextCalander.Provider value={contextValue}>
      <div className='calender'>
        ien
          <div className="header grid-item">
            <h1 className='title'>Calender</h1>
            <button className='btn'>x</button>
          </div>
          <div className="nav grid-item">nav</div>
          <Board 
            startDate={startDate}
          />
          <div className="board2 grid-item">b2</div>
      </div>
    </contextCalander.Provider>
  )
}
