import React from 'react'
import './Package.scss'
import {Box, Plus} from '../../icons'

function Package() {
return (
<section className="package">
  <div className="package-rules__icons">
    <Box />
    <Plus/>
  </div>
  <h1 className="package-title">Упаковка</h1>
  <div className="package-description">
  <p>Заказ должен быть упакован в коробку или герметичный пакет</p>
  <p>К упаковке должна быть прикреплена накладная как минимум с номером телефона клиента. Дополнительная информация не обязательна, но приветствуется</p>
  </div>
</section>
)
}

export default Package