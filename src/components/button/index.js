import React from 'react'
import PropTypes from 'prop-types'
import Shadow from '../shadow'
const Button = ({ content = 'Sample button', theme = 'primary', outline = false, size, shadow ,classes}) => (
   <button className={`${Shadow(shadow)} btn btn${outline ? `-outline` : ''}-${theme} ${size ? size === 'large' ? 'btn-lg' : size === 'small' ? 'btn-sm' : '' : ''} ${classes}`}>{content}</button>
)

Button.propTypes = {
   content: PropTypes.string,
   theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
   outline: PropTypes.bool,
   size: PropTypes.string,
   shadow: PropTypes.string,
   classes: PropTypes.string,
}
export default Button