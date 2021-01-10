import React from 'react'
import PropTypes from 'prop-types'


const Badge = ({ content = 'Sample ', theme = 'primary', rounded = false }) => (
   <span className={`badge ${rounded ? 'rounded-pill' : null} bg-${theme}`}>{content}</span>
)

Badge.propTypes = {
   content: PropTypes.string,
   theme: PropTypes.string,
   rounded: PropTypes.bool,
}
export default Badge