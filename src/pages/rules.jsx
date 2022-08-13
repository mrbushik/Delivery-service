import React from 'react';
import BroadcastInfo from '../components/BroadcastInfo/BroadcastInfo';
import Package from '../components/Pakage/Package';
import RulesInfo from '../components/RulesInfo/RulesInfo';
import RulesMassage from '../components/RulesMassage/RulesMassage';

function Rules() {
  return (
    <>
      <RulesMassage />
      <Package />
      <BroadcastInfo />
      <RulesInfo />
    </>
  );
}

export default Rules;
