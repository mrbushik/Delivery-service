import React from 'react'
import { Warehouse,Car, House, BackgroundHouse} from '../../../icons'
import './diliveryImg.scss'


function DeliveryImg() {
  return (
    <>
     <div className='background-image__house'>
    <BackgroundHouse/>
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