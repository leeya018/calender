import React, { useEffect, useState } from 'react'

import Board from './Board'
import moment from 'moment'

export const contextCalander = React.createContext()


export default function Calender() {
  const [startDate, setStartDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment().clone().add(1, 'month'))


  const contextValue = {
    startDate:startDate
  }

  useEffect(() => {  
    if(startDate.isAfter(endDate)){
      setEndDate(startDate.clone().add(1, 'month'))
    }
  }, [startDate])

  useEffect(() => {  
    if(startDate.isAfter(endDate)){
      setStartDate(endDate.clone().subtract(1, 'month'))
    }
  }, [endDate])

  return (
    <contextCalander.Provider value={contextValue}>
      <div className='calender'>
        
          <div className="header grid-item">
            <h1 className='title'>Calender</h1>
            <button className='btn'>x</button>
          </div>
          <div className="nav grid-item">nav</div>

          <div className="board board1 grid-item">
              <Board 
                date={startDate}
                updateDate={setStartDate}
                />
            </div>
          <div className="board2 grid-item">
          <Board 
                date={endDate}
                updateDate={setEndDate}
                />
          </div>
      </div>
    </contextCalander.Provider>
  )
}
