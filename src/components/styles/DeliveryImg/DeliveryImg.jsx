import React from 'react'
import { Warehouse,Car, House, BackgroundHouse, Road, Sun, Cloud,MiniCloud} from '../../../icons'
import './diliveryImg.scss'


function DeliveryImg() {
  return (
    <>
    <div className='divilery-img__container'></div>
    <div className='road-map'>
    <Road/>
    </div>
     <div className='background-image__house'>
    <BackgroundHouse/>
    </div>
    <div className='background-image__weather'>
        <div className='background-image__cloud'>
            <Cloud/>
        </div>
        <div className='background-image__minicloud'>
            <MiniCloud/>
        </div>
        <div className='background__cloud'>
            <Cloud/>
        </div>
        <div className='background-image__sun'>
            <Sun/>
        </div>
    </div>
    <div className='achievements-deliveo__container'>
        <div className='achievements-round'>
        <p className='achievements-present'>97%</p>
        <p className='achievements-title'>заказов</p>
        </div>
        <h5 className='achievements-description'>доставили вовремя в декабре 2022</h5>
       
    </div>
        <div className='image-container'>
            
        <Warehouse/>
        <Car/>
        <House/>
    </div>
   
    <div className='road'></div>
    </>

  )
}

export default DeliveryImg