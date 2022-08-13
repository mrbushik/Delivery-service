import React from 'react';
import HeaderText from '../components/HeaderText/HeaderText';
import LeadForm from '../components/LeadForm/LeadForm';
import DeliveryImg from '../components/styles/DeliveryImg/DeliveryImg';
import ServisesPrises from '../components/ServicesPrises/ServisesPrises';
import Processes from '../components/Processes/Processes';
import PayMethods from '../components/PayMethods/PayMethods';
import ImportantInfo from '../components/ImportantInfo/ImportantInfo';
import DiliveryStatus from '../components/DivileryStatus/DiliveryStatus';
import Benefits from '../components/Benefits/Benefits';
import SendAplication from '../components/SendAplication/SendAplication';
function mainPage() {
  return (
    <>
      <HeaderText />
      <LeadForm buttonText="ПЕРЕЗВОНИТЕ МНЕ" />
      <DeliveryImg />
      <ServisesPrises />
      <Processes />
      <PayMethods />
      <ImportantInfo />
      <DiliveryStatus />
      <Benefits />
      <SendAplication />
    </>
  );
}

export default mainPage;
