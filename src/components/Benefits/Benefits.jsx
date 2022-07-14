import React from 'react'
import './Benefits.scss'
import classNames from 'classnames'

function Benefits() {
  return (
    <section>
        <div className="container">
        <h2 className="benefits-title">Мой опыт — ваша гарантия качественных услуг доставки</h2>
        <p className="benefits-description">Будем знакомы — Владислав Каткаев, основатель курьерской службы Dostaver, лично контролирую работу курьеров.</p>
       <div className="benefit-rounds-wrapper">
        <div className="benefit-round">
            <h4 className="benefit-round__title">6 лет</h4>
            <p className="benefit-round__subtitle">с 2016 работаю в сфере курьерских доставок </p>
        </div>
        <div className={classNames('benefit-round', 'benefit-round__person')}>
        </div>
        <div className="benefit-round">
            <h4 className="benefit-round__title">4000+</h4>
            <p className="benefit-round__subtitle">доставил минимум 4000 разных посылок</p>
        </div>
       </div>
        </div>
        
    </section>
  )
}

export default Benefits