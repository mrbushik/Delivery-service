import React from 'react'
import {Cloud, MiniCloud, Plus,BgWareHouse,RightWareHouse} from '../../icons'
import classNames from 'classnames'
import './processes.scss'
import InfoRectangle from '../InfoRectangle/InfoRectangle'
function Processes() {
return (
<>
    <div className="container">
        <div className="processes-plus">
            <Plus />
        </div>
        <div className="section-title__container">
            <h2 className={classNames("section-title", "processes-title" )}>Организация процессов без лишней бюрократии
            </h2>
            <h4 className="section-subtitle">Быстро. Удобно. Понятно</h4>
        </div>
        <div className="processes-rectangles">
            <InfoRectangle rectangleNumber={1} title={'Отправьте нам запрос на доставку товаров'}
                rectangleFirstParagraph={<p>Сообщите нам, что вы хотите заказать услуги курьерской доставки, чтобы наш
                курьер забрал ваши посылки вечером в тот же день.</p>}
                rectangleSecondParagraph={<p>Связаться с нами вы можете любым удобным способом: позвонить, написать в
                    мессенджер, отправить e-mail.</p>}
                />
                <InfoRectangle rectangleNumber={2} title={'Подготовьте посылки и передайте курьеру'}
                    rectangleFirstParagraph={<p>Подготовьте ваши посылки до приезда курьера.</p>}
                    rectangleSecondParagraph={<p>Заказы должны быть упакованы в герметичный пакет или коробку.</p>}
                    rectangleTrirdParagraph={<p>Курьер приедет за посылкой в удобный 3-часовой интервал в рамках времени
                        с 16:00 до 22:00.</p>}
                    />
                    <InfoRectangle rectangleNumber={3} title={'На следующий день развезем посылки в указанное время'}
                        rectangleFirstParagraph={<p>Мы развозим заказы в указанный 3-часовой интервал в рамках времени
                        <b>с 8:00 до 22:00</b>. </p>}
                        rectangleSecondParagraph={<p>Перед выездом на адрес курьер всегда звонит клиенту.</p>}
                        />
                        <InfoRectangle rectangleNumber={4} title={'Получите от нас вырчку с доставок и отчет'}
                            rectangleFirstParagraph={<p>а следующий день после доставки заказов мы отправим вам
                            подробный отчётx</p>}
                            rectangleSecondParagraph={<a href="##">Пример отчета</a>}
                            />
        </div>
        <a href="##" className='processes-more__link'>Подробнее</a>
    </div>
    <div className="processes-warehouse">
    <BgWareHouse/>
    <RightWareHouse/>
    </div>
  <div className="processes-clouds">
  <MiniCloud/>
<Cloud/>
  </div>
</>
)
}

export default Processes