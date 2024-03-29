import React from 'react';
import { Link } from 'react-router-dom';

function HeaderMenu() {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const handleMenu = () => {
    setActiveMenu((pervState) => !pervState);
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
          <div onClick={handleMenu} className="main-menu__close">
            <span className="close"></span>
          </div>
          <div className="main-menu__links">
            <span>
              <span onClick={handleMenu}>
                <Link to="rules">Правила</Link>
              </span>
            </span>
            <span>
              <a href="##">Тарифы</a>
            </span>
            <span>
              <a className="ddd" href="##">
                Контакты
              </a>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderMenu;
