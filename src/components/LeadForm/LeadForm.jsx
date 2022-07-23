import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import styled from 'styled-components'
import ThankToOrder from '../ThankToOrder/ThankToOrder';
import ThemeContext from '../Context/Context';
import { Link } from 'react-router-dom';
import './LeadForm.scss'

const PrivacyPolicyLink = styled.a`
border-bottom: 1px dashed #FFFFFF;
opacity: 1;
margin-left: 3px;
`;

function LeadForm({buttonText}) {
    const {modal, setModal} = React.useContext(ThemeContext)
    const [isChecked, setIsChecked] = React.useState(false);
    const { register, handleSubmit,reset, formState:{ errors } } = useForm({
      defaultValues: {
        number: '',
      }
    });
    const onSubmit = data => {
      axios.post(`https://jsonplaceholder.typicode.com/users`,{data})
      .then(response => response)
      reset()
      setModal(true);
    };
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="lead-form">
        <div className="lead-container">
        <input 
        {...register("number",{ required: true })}
        type="text" placeholder='Введите номер телефона'/>
        <button type="submit">{buttonText}</button> 
        </div>
        <div className="lead-checkbox__container">
    <label className='checkbox-wrapper'>
      <input
        type="checkbox"
        {...register("ConfirmPrivacyPolicy",{ required: true })}
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
        ? <Link to='/privacy'><PrivacyPolicyLink href='##'>политикой конфиденциальности</PrivacyPolicyLink></Link>
        : <Link to='/privacy'><a className='privacy-policy__link' href='##'>политикой конфиденциальности</a></Link>}</p>
        </div>
        <div className='form-errors'>
        {errors.number && <p>В поле ничего нет, напишите ваш номер телефона</p>}
          {errors.ConfirmPrivacyPolicy && !isChecked && <p>Требуется согласие с политикой конфиденциальности</p>}
        </div>
    </form>
    </div>
    {modal && <ThankToOrder/>}
    </>
  )
}

export default LeadForm