import React from 'react'
import '../../hero-section.css'
import renderSectionTetromino from './section.tetromino'
const Section = ({ tetromino, shape = 'circle', background = 'primary' ,index}) => {
  return <div className="row">
    <section className="section section-lg section-hero section-shaped">
      {index !== 0 ? <div className="separator separator-top separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="0 100 0 0 2560 0 "></polygon>
        </svg>
      </div> : ''}
      <div className={`shape ${shape} shape-${background}`}>
        <span className="span-150"></span>
        <span className="span-50"></span>
        <span className="span-50"></span>
        <span className="span-75"></span>
        <span className="span-100"></span>
        <span className="span-75"></span>
        <span className="span-50"></span>
        <span className="span-100"></span>
        <span className="span-50"></span>
        <span className="span-100"></span>
      </div>
      <div className="container shape-container d-flex align-items-center py-lg">
        <div className="col px-0">
          {tetromino.map((component) => {
            return renderSectionTetromino(component)
          })}
        </div>
      </div>

      <div className="separator separator-bottom separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

    </section>
  </div>
}

export default Section