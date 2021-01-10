import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ content = 'A simple primary alert—check it out!', theme = 'primary', heading, close }) => {
   const [show, toggleShow] = useState(true);
   return show && <div className={`alert alert-${theme} ${close ? `alert-dismissible fade show` : ''}`} role="alert">
      {heading && <>
         <h4 className="alert-heading">{heading}</h4>
         <hr />
      </>}
      {content}
      {close && <button type="button" className="close" aria-label="Close" onClick={() => toggleShow(false)}><span aria-hidden="true">×</span></button>}
   </div>
}
export default Alert

