import React from 'react'
import {Cloud, MiniCloud, Plus } from '../../icons'
import classNames from 'classnames'
import './processes.scss'
function Processes() {
  return (
    <>
    <div className="container">
        <div className="processes-plus">
            <Plus/>
            </div>
        <div className="section-title__container">
        <h2 className={classNames("section-title", "processes-title")}>Организация процессов без лишней бюрократии</h2>
    <h4 className="section-subtitle">Быстро. Удобно. Понятно</h4>
        </div>
    </div>
    </>
  )
}

export default Processes