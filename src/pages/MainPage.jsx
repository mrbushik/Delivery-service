import React from 'react'
import Header from '../components/Header/Header'
import HeaderText from '../components/HeaderText/HeaderText'
import LeadForm from '../components/LeadForm/LeadForm'

function mainPage() {
  return (
    <>
    <Header/>
    <HeaderText/>
    <LeadForm buttonText='ПЕРЕЗВОНИТЕ МНЕ'/>
    </>
  )
}

export default mainPage