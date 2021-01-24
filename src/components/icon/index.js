import React from 'react'
import PropTypes from 'prop-types'
import "@fortawesome/fontawesome-free/css/all.css";
import '../../icons.css'
const Icon = ({ content, size, source, shape, center }) => {
   return content ?
      center ? <center><div className={`icons jumbotron-icons ${shape ? `icons-shape icons-shape-${shape}` : ''} rounded-circle`}>
         <i className={`fa fa-${content} fa-${size}`} aria-hidden="true"></i>
      </div>
      </center> : <div className={`icons jumbotron-icons ${shape ? `icons-shape icons-shape-${shape}` : ''} rounded-circle`}>
            <i className={`fa fa-${content} fa-${size}`} aria-hidden="true"></i>
         </div>

      : ''

}

Icon.propTypes = {

}
export default Icon
