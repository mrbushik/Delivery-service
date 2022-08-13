import React from 'react';
import './PrivacyText.scss';
function PrivacyText({ title, subtitle }) {
  return (
    <>
      <h4 className="privacy-list__title">{title}</h4>
      <p className="privacy-list__subtitle"> {subtitle}</p>
    </>
  );
}

export default PrivacyText;
