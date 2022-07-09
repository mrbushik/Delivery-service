import React from 'react'
import classNames from 'classnames'
import './ServisesPrises.scss'
import { BackgroundPrice,} from '../../icons'

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
          <div className="price-tabe__collomn">от 51</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">1 кг.</div>
          <div className="price-tabe__collomn">3 кг.</div>
          <div className="price-tabe__collomn">5 кг.</div>
          <div className="price-tabe__collomn">10 кг.</div>
          <div className="price-tabe__collomn">15 кг.</div>
          <div className="price-tabe__collomn">20 кг.</div>
          <div className="price-tabe__collomn">Забор товара</div>
        </div>
        <div className="price-table-row">
        <div className="price-tabe__collomn">до 50</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">3 кг.</div>
          <div className="price-tabe__collomn">5 кг.</div>
          <div className="price-tabe__collomn">10 кг.</div>
          <div className="price-tabe__collomn">15 кг.</div>
          <div className="price-tabe__collomn">20 кг.</div>
          <div className="price-tabe__collomn">Забор товара</div>
        </div>
        <div className="price-table-row">
        <div className="price-tabe__collomn">до 25</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">1 кг.</div>
          <div className="price-tabe__collomn">3 кг.</div>
          <div className="price-tabe__collomn">5 кг.</div>
          <div className="price-tabe__collomn">10 кг.</div>
          <div className="price-tabe__collomn">15 кг.</div>
          <div className="price-tabe__collomn">20 кг.</div>
          <div className="price-tabe__collomn">Забор товара</div>
        </div>
        <div className="price-table-row">
        <div className="price-tabe__collomn">до 10</div>
          <div className="price-tabe__collomn"></div>
          <div className="price-tabe__collomn">1 кг.</div>
          <div className="price-tabe__collomn">3 кг.</div>
          <div className="price-tabe__collomn">5 кг.</div>
          <div className="price-tabe__collomn">10 кг.</div>
          <div className="price-tabe__collomn">15 кг.</div>
          <div className="price-tabe__collomn">20 кг.</div>
          <div className="price-tabe__collomn">Забор товара</div>
        </div>
    </div>
<BackgroundPrice/>
    </>
  )
}

export default ServisesPrises