import React from 'react'
import classNames from 'classnames'
import './ServisesPrises.scss'
import { BackgroundPrice,LeftMark, RightMark, Cloud, MiniCloud } from '../../icons'

function ServisesPrises() {
  return (
    <>
    <div className="container">
        <div className="section-title__container">
        <h2 className="section-title">Стоимость курьерских услуг</h2>
    <h4 className="section-subtitle">Вес и стоимость в таблице указаны для одной доставки</h4>
        </div>
    </div>
    <div className="price-table">
        <div className={classNames("price-table-row")}>
        <div className={classNames("price-tabe__description", "table-title__divilery")}>Доставок в день</div>
          <div className={classNames("price-tabe__description", "table-title__weight")}>Вес, до</div>
          <div className="price-tabe__description">1 кг.</div>
          <div className="price-tabe__description">3 кг.</div>
          <div className="price-tabe__description">5 кг.</div>
          <div className="price-tabe__description">10 кг.</div>
          <div className="price-tabe__description">15 кг.</div>
          <div className="price-tabe__description">20 кг.</div>
          <div className="price-tabe__description">Забор товара</div>
        </div>
        <div className="price-table-row">
          <div className="price-tabe__main">от 51</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">180</div>
          <div className="price-tabe__collomn">200</div>
          <div className="price-tabe__collomn">220</div>
          <div className="price-tabe__collomn">270</div>
          <div className="price-tabe__collomn">350</div>
          <div className="price-tabe__collomn">400</div>
          <div className="price-tabe__collomn">0</div>
        </div>
        <div className="price-table-row">
        <div className="price-tabe__main">до 50</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">200</div>
          <div className="price-tabe__collomn">220</div>
          <div className="price-tabe__collomn">240</div>
          <div className="price-tabe__collomn">290</div>
          <div className="price-tabe__collomn">390</div>
          <div className="price-tabe__collomn">430</div>
          <div className="price-tabe__collomn">0</div>
        </div>
        <div className="price-table-row">
        <div className="price-tabe__main">до 25</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">220</div>
          <div className="price-tabe__collomn">240</div>
          <div className="price-tabe__collomn">260</div>
          <div className="price-tabe__collomn">310</div>
          <div className="price-tabe__collomn">410</div>
          <div className="price-tabe__collomn">470</div>
          <div className="price-tabe__collomn">0</div>
        </div>
        <div className="price-table-row">
        <div className={classNames("price-tabe__main", "table-title__before10")}>до 10</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">240</div>
          <div className="price-tabe__collomn">260</div>
          <div className="price-tabe__collomn">280</div>
          <div className="price-tabe__collomn">330</div>
          <div className="price-tabe__collomn">430</div>
          <div className="price-tabe__collomn">490</div>
          <div className={classNames("price-tabe__collomn", "price-tabe__last")}>290</div>
        </div>
    </div>
    
<BackgroundPrice/>
<LeftMark />
<RightMark/>
<div className="price-cloud">
<Cloud/>
</div>
<div className="price-minicloud">
  <MiniCloud/>
</div>
    </>
  )
}

export default ServisesPrises