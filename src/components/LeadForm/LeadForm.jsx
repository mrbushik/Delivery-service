import React from 'react'
import styled from 'styled-components'
import './LeadForm.scss'
import { useForm } from "react-hook-form";


const PrivacyPolicyLink = styled.a`
border-bottom: 1px dashed #FFFFFF;
opacity: 1;
margin-left: 3px;
`;

function LeadForm({buttonText}) {
    const [isChecked, setIsChecked] = React.useState(false);
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = data => console.log(data);
    
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="lead-form">
        <div className="lead-container">
        <input 
        {...register("number",{ required: true })}
        type="text" placeholder='Введите номер телефона'/>
          {errors.number && <p>В поле ничего нет, напишите ваш номер телефона</p>}
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