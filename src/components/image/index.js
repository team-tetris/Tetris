import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ source, size, rounded = false, height, width, classname }) => {
   return <img src={source} className={`${rounded ? 'rounded' : ''} ${size ? size : ''} ${classname ? classname : ''}`} style={{
      height: `${height && width ? height : undefined}`,
      width: `${height && width ? width : undefined}`
   }} />
}

Image.propTypes = {
   source: PropTypes.string.isRequired,
   size: PropTypes.string,
   rounded: PropTypes.bool,
   height: PropTypes.string,
   width: PropTypes.string,
   classname: PropTypes.string
}

export default Image