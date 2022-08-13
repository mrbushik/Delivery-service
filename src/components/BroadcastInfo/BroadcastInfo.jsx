import React from 'react';
import './BroadcastInfo.scss';
import { Box, infoIcon, Plus } from '../../icons';
import Row from '../styles/Row/Row';

function BroadcastInfo() {
  return (
    <div className="broadcast-info__section">
      <h2 className="broadcast-title">Способы передачи информации о заказах:</h2>
      <div className="broadcast-info">
        <Row textArray={['Как', ' Табличкой в Эксель в любом формате', 'Обычным текстом']} />
        <Row
          textArray={['Куда', 'Telegram', 'WhatsApp', 'На электронную почту order@dostaver.com']}
        />
      </div>
    </div>
  );
}

export default BroadcastInfo;
