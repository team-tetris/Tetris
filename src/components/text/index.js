import React from 'react'
import PropTypes from 'prop-types'
const Text = ({ content = 'Sample text', size }) => {
   return <p className={size < 6 ? `h${size}` : undefined}> {content}</p >
}

Text.propTypes = {
   content: PropTypes.string,
   size: PropTypes.number,
}
export default Text