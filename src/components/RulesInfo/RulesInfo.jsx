import React from 'react';
import { Money, Report } from '../../icons';
import TextItem from '../TextItems/TextItem';

function RulesInfo() {
  return (
    <div className="rules-info">
      <div className="container">
        <TextItem
          icon={<Money />}
          title={'Выручка'}
          subtitle={
            'Мы вычтем из выручки наше вознаграждение согласно отчёту и отправим её на Ваш расчётный счет на следующий день после доставок'
          }
        />
      </div>
    </div>
  );
}

export default RulesInfo;
