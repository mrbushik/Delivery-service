import React from 'react'
import styled from 'styled-components'
import './LeadForm.scss'

const PrivacyPolicyLink = styled.a`
border-bottom: 1px dashed #FFFFFF;
opacity: 1;
margin-left: 3px;
`;

function LeadForm({buttonText}) {
    const [isChecked, setIsChecked] = React.useState(false);
  return (
    <>
    <div className="container">
    <form className="lead-form">
        <div className="lead-container">
        <input type="text" placeholder='Введите номер телефона'/>
        <button type="submit">{buttonText}</button> 
        </div>
        <div className="lead-checkbox__container">
    <label className='checkbox-wrapper'>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
      />
    </label>
        <p>Я согласен с
        {isChecked 
        ? <PrivacyPolicyLink href='##'>политикой конфиденциальности</PrivacyPolicyLink>
        : <a className='privacy-policy__link' href='##'>политикой конфиденциальности</a>}</p>
        </div>
    </form>
    </div>
    </>
  )
}

export default LeadForm