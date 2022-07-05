import React from 'react'
import { Watch, Telegram, WhatsApp,} from '../../icons'
import './header.scss'

function Header() {
  return (
    <>
    <header className='header'>
    <nav className='header-navbar'>
        <a href='##'>Правила</a>
        <a href='##'>Тарифы</a>
        <a className='ddd' href='##'>Контакты</a>
    </nav>
    <div>
  <div className='logo-wrapper'>
  <Watch/>
   <h4>DOSTAVER</h4>
  </div>
    </div>
    <div className='header-contacts__container'>
      <div className='header-info__container'>
        <a href='tel:74994084770'>+7 499 408 47 70</a>
        <p>ежедневно с 08:00 до 20:00</p>
      </div>
      <div className='header-sotial'>
        <div className='header-rectangle'>
        <WhatsApp/>
        </div>
        <div className='header-rectangle'>
          <Telegram/>
          </div>
      </div>
    </div>
    </header>
    </>
  )
}

export default Header