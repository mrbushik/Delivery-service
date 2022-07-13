import React from 'react'
import './DiliveryStatus.scss'
import classNames from 'classnames'

function DiliveryStatus() {
  return (
    <section>
        <div className="section-title__container">
            <h2 className={classNames("section-title", "dilivery-status__title" )}>Ваши клиенты будут в курсе о статусе своих доставок</h2>
            <h4 className="dilivery-status__subtitle">Вашим менеджерам не придётся заниматься дополнительной работой и отвечать всем клиентам, когда они получат свои посылки.<b> Информирование мы полностью берём на себя.</b> Связываемся с вами только в случае необходимости, если клиент не выходит на связь</h4>
        </div> 
        <div className="dilivery-status__container">
            <div className="dilivery-status__item">
                <h4 className="status-container__title">Звоним заранее</h4>
            </div>
        </div>
    </section>
  )
}

export default DiliveryStatus