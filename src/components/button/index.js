import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ content = 'Sample button', theme = 'primary', outline = false, size }) => (
   <button className={`btn btn${outline ? `-outline` : ''}-${theme} ${size ? size === 'large' ? 'btn-lg' : size === 'small' ? 'btn-sm' : '' : ''}`}>{content}</button>
)

Button.propTypes = {
   content: PropTypes.string,
   theme: PropTypes.string,
   outline: PropTypes.bool,
   size: PropTypes.string,
}
export default Button