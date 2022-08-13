import React from 'react';
import { Watch, Telegram, WhatsApp } from '../../icons';
import './Footer.scss';
function Footer() {
  return (
    <footer>
      <div className="footer-logo__container">
        <Watch />
        <h4>DOSTAVER</h4>
      </div>
      <div className="footer-owner__container">
        <p>
          ИП Каткаев Владислав Наранович <br />
          ИНН 372003215258
        </p>
      </div>
      <div className="footer-privacy__container">
        <a href="##">Политика конфиденциальности</a>
        <a href="##">Полные правила</a>
      </div>
      <div className="footer-contacts__container">
        <div className="header-info__container">
          <a className="footer-number__link" href="tel:74994084770">
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
    </footer>
  );
}

export default Footer;
