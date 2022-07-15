/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Benefits.scss'
import classNames from 'classnames'
import Reviews from '../../icons/img/reviews.png'
import {  Car,Cloud} from '../../icons'
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
        <div className="benefit-round">
            <h4 className="benefit-round__title">12</h4>
            <p className="benefit-round__subtitle">собрал команду из 12 курьеров (пешие + авто)</p>
        </div>
        <div className="benefit-round">
            <h4 className="benefit-round__title">2700+</h4>
            <p className="benefit-round__subtitle">клиентов из YouDo оценили мою работу на 5 по статистике за 3 года работы — с 2019 по 2021</p>
            <img src={Reviews}/>
            <a href='##' className="benefit-round__link">Посмотреть профиль</a>
        </div>
       </div>
        </div>
        <div className="benefit-icons">
            <Car/>
            <Cloud/>
        </div>
    </section>
  )
}

export default Benefits