import React from 'react';
import ImportantContainer from '../styles/ImportantContainer/ImportantContainer';
import './ImportantInfo.scss';
function ImportantInfo() {
  return (
    <section>
      <div className="importantInfo-rectngle">
        <h2 className="importantInfo-title">Важная информация</h2>
        <div className="important-containers__wraper">
          <ImportantContainer
            text={
              <span>
                на каждом чеке <b>в графе «продавец» будетнапечатано название вашего юр. лица</b>, в
                томчисле и на цифровых чеках в онлайн ОФД
              </span>
            }
          />
          <ImportantContainer
            text={
              <span>
                <b>на следующий день</b> после доставок мы <b>переводим</b> на ваш расчётный счёт
                всю выручку: наличные оплаты и оплаты по терминалу
              </span>
            }
          />
          <ImportantContainer
            text={
              <span>
                стоимость кассового обслуживания
                <h4 className="important-transition__info">0,7% от суммы чека</h4>
              </span>
            }
          />
          <ImportantContainer
            text={
              <span>
                стоимость эквайринга
                <h4 className="important-transition__info">1,7% от суммы чека</h4>
              </span>
            }
          />
          <ImportantContainer
            text={
              <span>
                оплата за страховой сбор
                <h4 className="important-transition__info">0,5% от объявленной ценности</h4>
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default ImportantInfo;
