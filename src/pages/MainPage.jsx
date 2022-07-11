import React from 'react'
import Header from '../components/Header/Header'
import HeaderText from '../components/HeaderText/HeaderText'
import LeadForm from '../components/LeadForm/LeadForm'
import DeliveryImg from '../components/styles/DeliveryImg/DeliveryImg'
import ServisesPrises  from '../components/ServicesPrises/ServisesPrises'
import Processes from '../components/Processes/Processes'

function mainPage() {
  return (
    <>
    <Header/>
    <HeaderText/>
    <LeadForm buttonText='ПЕРЕЗВОНИТЕ МНЕ'/>
    <DeliveryImg/>
    <ServisesPrises/>
    <Processes/>
    </>
  )
}

export default mainPage