import React from 'react'
import LeadForm from '../LeadForm/LeadForm'
import {  Tries,Warehouse,Cloud,Plus} from '../../icons'
import './SendAplication.scss'

function SendAplication() {
  return (
    <>
    <div className="container">
    <h2 className="benefits-title">Отправляйте заявку, чтобы обсудить условия сотрудничества</h2>
        <p className="benefits-description">или свяжитесь с нами как вам будет удобно — по телефону либо в одном из мессенджеров</p>
        <LeadForm buttonText='БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ'/>
    </div>
    <div className="send-aplication-icons">
<Warehouse/>
    <Tries/>
    <Cloud/>
    <Plus/>
    </div>

    </>
  )
}

export default SendAplication