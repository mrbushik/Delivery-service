import React from 'react';
import './headerText.scss';
function headerText() {
  return (
    <section>
      <div className="container">
        <div className="header-title__container">
          <h1 className="main-title">Курьерская доставка</h1>
          <h2 className="header-subtitle">для интернет-магазинов в пределах Москвы и МО</h2>
          <p>
            Обеспечим вашему бизнесу доставку точно в срок и с удобной возможностью оплаты заказов
            для вас и ваших клиентов{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default headerText;
