import React from 'react';
import { Watch, Telegram, WhatsApp } from '../../icons';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-navbar">
          <a href="##">Правила</a>
          <a href="##">Тарифы</a>
          <a className="ddd" href="##">
            Контакты
          </a>
        </div>
        <div className="logo-rectangle">
          <Link to="/">
            <div className="logo-wrapper">
              <Watch />
              <h4>DOSTAVER</h4>
            </div>
          </Link>
        </div>
        <div className="header-contacts__container">
          <div className="header-info__container">
            <a className="number-link" href="tel:74994084770">
              +7 499 408 47 70
            </a>
            <p className="header-work__info">ежедневно с 08:00 до 20:00</p>
          </div>
          <div className="header-sotial">
            <div className="header-rectangle">
              <WhatsApp />
            </div>
            <div className="header-rectangle">
              <Telegram />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
