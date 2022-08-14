import React from 'react';
import { Link } from 'react-router-dom';

function HeaderMenu() {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const handleMenu = (condition) => {
    setActiveMenu(condition);
  };
  return (
    <>
      <div onClick={() => handleMenu(true)} className="burger-menu">
        <div className="burger-menu__row"></div>
        <div className="burger-menu__row"></div>
        <div className="burger-menu__row"></div>
      </div>
      {activeMenu && (
        <div className="main-menu">
          <div onClick={() => handleMenu(false)} className="main-menu__close">
            <span class="close"></span>
          </div>
          <div className="main-menu__links">
            <Link to="rules">Правила</Link>
            <a href="##">Тарифы</a>
            <a className="ddd" href="##">
              Контакты
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderMenu;
