import React from 'react';
import './DiliveryStatus.scss';
import classNames from 'classnames';
import { Phone, Bell, MiniCar, Cloud, DiliveryInfoBg, DiliveryCarBg, Plus } from '../../icons';

function DiliveryStatus() {
  return (
    <section>
      <div className="container">
        <div className="section-title__container">
          <h2 className={classNames('section-title', 'dilivery-status__title')}>
            Ваши клиенты будут в курсе о статусе своих доставок
          </h2>
          <h4 className="dilivery-status__subtitle">
            Вашим менеджерам не придётся заниматься дополнительной работой и отвечать всем клиентам,
            когда они получат свои посылки.<b> Информирование мы полностью берём на себя.</b>{' '}
            Связываемся с вами только в случае необходимости, если клиент не выходит на связь
          </h4>
        </div>

        <div className="dilivery-status__container">
          <div className="dilivery-status__item">
            <Phone />
            <h4 className="status-container__title">Звоним заранее</h4>
            <p>
              Курьер всегда заранее звонит клиенту. Если ответа нет, с клиентом пытается связаться
              наш менеджер.
            </p>
          </div>
          <div className="dilivery-status__item">
            <Bell />
            <h4 className="status-container__title">Сообщаем вам</h4>
            <p>
              Если и у менеджера не получилось дозвониться клиенту, мы обязательно сообщаем об этом
              вам.{' '}
            </p>
          </div>
          <div className="dilivery-status__item">
            <MiniCar />
            <h4 className="status-container__title">Доставка без связи</h4>
            <p>
              Курьер может поехать на доставку несмотря на отсутствие связи с клиентом, если вы так
              решите.
            </p>
          </div>
        </div>
      </div>
      <div className="dilivery-status__bg">
        <DiliveryInfoBg />
        <DiliveryCarBg />
        <Plus />
        <Cloud />
      </div>
    </section>
  );
}

export default DiliveryStatus;
