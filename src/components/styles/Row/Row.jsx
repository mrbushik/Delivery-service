import React from 'react'
import './row.scss'
function Row({textArray}) {
  return (
    <div className='row-container'>
        {textArray.map(item => <div className='row-container__item'>{item}</div>)}
    </div>
  )
}

export default Row