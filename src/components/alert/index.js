import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Shadow from '../shadow'

const Alert = ({ content = 'A simple primary alert—check it out!', theme = 'primary', heading, close, shadow ,classes}) => {
   const [show, toggleShow] = useState(true);
   return show && <div className={`${Shadow(shadow)} alert alert-${theme} ${close ? `alert-dismissible fade show` : ''} ${classes}`} role="alert">
      {heading && <>
         <h4 className="alert-heading">{heading}</h4>
         <hr />
      </>}
      {content}
      {close && <button type="button" className="btn-close" aria-label="Close" onClick={() => toggleShow(false)}></button>}
   </div>
}

Alert.propTypes = {
   content: PropTypes.string,
   theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
   heading: PropTypes.string,
   close: PropTypes.bool,
}

export default Alert

