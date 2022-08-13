import React from 'react';
import { Money, Report, Cloud } from '../../icons';
import TextItem from '../TextItems/TextItem';
import './RulesInfo.scss';
function RulesInfo() {
  return (
    <div className="rules-info">
      <div className="container">
        <div className="rules-svg">
          <Cloud />
        </div>
        <div className="rules-info__container">
          <TextItem
            icon={<Money />}
            title={'Выручка'}
            subtitle={
              'Мы вычтем из выручки наше вознаграждение согласно отчёту и отправим её на Ваш расчётный счет на следующий день после доставок'
            }
          />
          <TextItem
            icon={<Report />}
            title={'Отчет'}
            subtitle={
              'Вместе с выручкой мы отправим отчёт. В нём будет содержаться статистика и информация о доставках, выполненных в отчётный день'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RulesInfo;
