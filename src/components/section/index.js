import React from 'react'
import '../../hero-section.css'
import renderSectionTetromino from './section.tetromino'
const Section = ({tetromino}) =>
{
    return <div className="position-relative">
      <section className="section section-lg section-hero section-shaped">
        
    <div className="shape square shape-primary">
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
      {tetromino.map( (component) =>{
         return renderSectionTetromino(component)})}
      </div>
    </div>
    
  </section>
  </div> 
}

export default Section