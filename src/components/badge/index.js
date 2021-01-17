import React from 'react'
import PropTypes from 'prop-types'
import Shadow from '../shadow'

const Badge = ({ content = 'Sample ', theme = 'primary', rounded = false, shadow }) => (
   <span data-testid="badge" className={`${Shadow(shadow)} badge bg-${theme} ${rounded ? 'rounded-pill' : undefined}`}>{content}</span>
)

Badge.propTypes = {
   content: PropTypes.string,
   theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
   rounded: PropTypes.bool,
}
export default Badge