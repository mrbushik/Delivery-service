import React from 'react';
import LeadForm from '../LeadForm/LeadForm';
import { LeftBuilding, RightBuilding, PayTerminal, Sun, Plus, Cloud, MiniCloud } from '../../icons';

import './PayMethods.scss';
function PayMethods() {
  return (
    <section>
      <div className="container">
        <div className="section-title">Работая с нами, вы на 100 % соблюдаете 54-ФЗ</div>
        <div className="processes-decription">
          <p>Курьеры Dostaver не ограничены лишь наличным методом приёма выручки.</p>
          <p>
            Каждый курьер имеет при себе мобильный <b>терминал aQsi 5</b> со встроенным эквайрингом.
          </p>
          <p>
            Ваши клиенты могут по факту оплачивать заказ картой <br />и получать бумажный кассовый
            чек.{' '}
          </p>
        </div>
        <LeadForm buttonText={'ОБСУДИТЬ СОТРУДНИЧЕСТВО'} />
        <div className="pay-terminal__img">
          <PayTerminal />
        </div>
        <div className="methods-building__container">
          <LeftBuilding />
        </div>
        <div className="left-building__container">
          <RightBuilding />
        </div>
        <div className="methods-sun">
          <Sun />
        </div>
        <div className="methods-clouds">
          <Cloud />
          <MiniCloud />
        </div>
        <div className="methods-plus__container">
          <Plus />
          <Plus />
          <Plus />
        </div>
      </div>
    </section>
  );
}

export default PayMethods;
