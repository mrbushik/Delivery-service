import React from 'react'
import "./infoRectangle.scss"
function InfoRectangle({rectangleNumber, title,rectangleFirstParagraph, rectangleSecondParagraph,rectangleTrirdParagraph}) {
  return (
    <>
    <div className="info-rectangle__wraper">
        <div className="rectangle-title__container">
        <div className="rectangle-number__round">{rectangleNumber}</div>
            <h3 className="rectangle-title">{title}</h3>
        </div>
        {rectangleFirstParagraph}
            {rectangleSecondParagraph && rectangleSecondParagraph}
            {rectangleTrirdParagraph && rectangleTrirdParagraph}
    </div>
    </>
  )
}

export default InfoRectangle