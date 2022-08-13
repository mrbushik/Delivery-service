import React from 'react';
import './TextItem.scss';
function TextItem({ icon, title, subtitle }) {
  return (
    <div className="rules-items">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default TextItem;
