import React from 'react'
import {Iicons} from '../../../icons'
import './ImportantContainer.scss'
function ImportantContainer({text}) {
  return (
    <>
    <div className="important-container__item">
    <div className="important-iconcontainer">
        <Iicons/>
    </div>
    <div className="important-container__text">
    {text && text}
    </div>
    </div>
    </>
  )
}

export default ImportantContainer