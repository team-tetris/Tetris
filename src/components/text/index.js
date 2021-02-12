import React from 'react'
import PropTypes from 'prop-types'
const Text = ({ content = 'Sample text', size,classes }) => {
   return <p className={`${size < 6 ? `h${size}` : undefined} ${classes}`}>{content}</p >
}

Text.propTypes = {
   content: PropTypes.string,
   size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}
export default Text