import React from 'react'
import Header from '../components/Header/Header'
import HeaderText from '../components/HeaderText/HeaderText'
import LeadForm from '../components/LeadForm/LeadForm'
import DeliveryImg from '../components/styles/DeliveryImg/DeliveryImg'
import ServisesPrises  from '../components/ServicesPrises/ServisesPrises'
import Processes from '../components/Processes/Processes'
import PayMethods from '../components/PayMethods/PayMethods'
import ImportantInfo from '../components/ImportantInfo/ImportantInfo'
import DiliveryStatus from '../components/DivileryStatus/DiliveryStatus'
import Benefits from '../components/Benefits/Benefits'
import SendAplication from '../components/SendAplication/SendAplication'
import Footer from '../components/Footer/Footer'
function mainPage() {
  return (
    <>
    <Header/>
    <HeaderText/>
    <LeadForm buttonText='ПЕРЕЗВОНИТЕ МНЕ'/>
    <DeliveryImg/>
    {/* <ServisesPrises/>
    <Processes/>
    <PayMethods/>
    <ImportantInfo/>
    <DiliveryStatus/>
    <Benefits/>
    <SendAplication/>
    <Footer/> */}
    </>
  )
}

export default mainPage