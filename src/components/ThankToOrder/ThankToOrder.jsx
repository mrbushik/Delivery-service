/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './ThankToOrder.scss'
import { ThankHeart,} from '../../icons'

function ThankToOrder({CloseingModal}) {
    const close = (e)=>{
        e.preventDefault()
        CloseingModal(false)
    }
  return (
    <>
    <div className="thank-modal">
        <a onClick={(e)=>close(e)} href='##'className='close'></a>
        <div className="modal-icon">
            <ThankHeart/>
        </div>
        <h3>Спасибо за заявку!</h3>
        <span>В ближайшее время мы свяжемся с вами</span>
        </div>
        </>
  )
}

export default ThankToOrder