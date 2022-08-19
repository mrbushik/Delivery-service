import React from 'react';
import './ErrorForm.scss';
function ErrorForm() {
  return (
    <>
      <h1 className="error-page__title">Ошибка 404</h1>
      <h3 className="error-page__subtitle">Такой страницы не существует. Маршрут перестроен.</h3>
      <a className="error-switch">ВЕРНУТЬСЯ НА ГЛАВНУЮ</a>
    </>
  );
}

export default ErrorForm;
