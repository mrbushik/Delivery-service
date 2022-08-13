/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './ThankToOrder.scss';
import { ThankHeart } from '../../icons';
import ThemeContext from '../Context/Context';

function ThankToOrder({}) {
  const { modal, setModal } = React.useContext(ThemeContext);
  const close = (e) => {
    e.preventDefault();
    setModal(false);
  };
  return (
    <>
      <div className="thank-modal">
        <a onClick={(e) => close(e)} href="##" className="close"></a>
        <div className="modal-icon">
          <ThankHeart />
        </div>
        <h3>Спасибо за заявку!</h3>
        <span>В ближайшее время мы свяжемся с вами</span>
      </div>
    </>
  );
}

export default ThankToOrder;
