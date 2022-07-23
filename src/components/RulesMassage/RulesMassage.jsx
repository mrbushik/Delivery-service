import React from 'react'
import InfoRectangle from '../InfoRectangle/InfoRectangle'
import './RulesMassage.scss'
import {Courer, Cloud, Plus} from '../../icons'
function RulesMassage() {
  return (
    <div className="container">
      <h1 className='Rules-title'>Полные правила</h1>
      <div className="Rules-massage__courer"><Courer/></div>
      <h3 className='Rules-description'>Процесс доставки</h3>
      <div className='rules-massage__icons'>
        <Cloud/>
        <Plus/>
      </div>
         <div className= 'massage-wrapper'>
<div className="massage-container">
<InfoRectangle rectangleNumber={1}
 title={<div className='rectangle-info-description'><b>До 14:00 </b>нужно сообщить нам о том, что Вам нужен курьер, пеший или на автомобиле</div>} 
 isTitle={true}/>
</div>
<div className="massage-container">
<InfoRectangle rectangleNumber={2}
 title={<div className='rectangle-info-description'>Курьер заберёт <strong>упакованные </strong> посылки в любой 3-часовой интервал в рамках времени <strong>с 16:00 до 22:00</strong></div>} 
 isTitle={true}/>
</div>
<div className="massage-container">
<div className="info-rectangle__wraper">
<div className="rectangle-title__container">
        <div className="rectangle-number__round">3</div>
             <div className='rectangle-info-description'><strong>До 22:00</strong> нужно передать нам информацию о заказах одним из перечисленных способов</div>
        </div>
        <div className='rectangle-info-description'>
            <p>Она должна содержать:</p>
            <p><strong>1. Адрес получателя </strong>– улица, дом;</p>
            <p><strong>2. Время </strong>- любой 3-часовой интервал в рамках времени с 8:00 до 22:00</p>
            <p><strong>3. Телефон получателя</strong></p>
            <p><strong>4. Информацию о получении оплаты с клиента </strong>– оплачено, либо сумму, которую надо взять с клиента</p>
            <p><strong>5.</strong> Остальную информацию, такую как <strong>подъезд, этаж, квартира, домофон, ориентир, ФИО, комментарий</strong> к заказу, внутренний номер заказа и так далее можно предоставить по желанию. Она будет передана курьеру вместе с основными данными</p>
        </div>
</div>
</div>
<div className="massage-container">
<InfoRectangle rectangleNumber={4}
 title={<div className='rectangle-info-description'>На следующий день мы <strong>развозим</strong> заказы в указанный 3-часовой интервал в рамках времени <strong>с 8:00 до 22:00</strong></div>} 
 isTitle={true}/>
</div>
<div className="massage-container">
<InfoRectangle rectangleNumber={5}
 title={<div className='rectangle-info-description'>Перед выездом на адрес <strong>курьер всегда звонит клиенту.</strong> Если клиент не выходит на связь, мы действуем по плану, который согласуем с вами перед началом сотрудничества.</div>} 
 isTitle={true}/>
</div>
<div className="massage-container">
<InfoRectangle rectangleNumber={6}
 title={<div className='rectangle-info-description'><strong>Невостребованные товары</strong> вернём бесплатно через день после доставки</div>} 
 isTitle={true}/>
</div>
<div className="massage-container">
<InfoRectangle rectangleNumber={7}
 title={<div className='rectangle-info-description'><strong>Выручку и отчёт</strong> переведём на Ваш расчётный счёт на следующий день после доставок</div>} 
 isTitle={true}/>
</div>
    </div>
    </div>
   
  )
}

export default RulesMassage