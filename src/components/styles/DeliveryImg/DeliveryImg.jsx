import React from 'react'
import { Warehouse,Car, House, BackgroundHouse, Road, Sun, Cloud,MiniCloud} from '../../../icons'
import './diliveryImg.scss'


function DeliveryImg() {
  return (
    <>
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