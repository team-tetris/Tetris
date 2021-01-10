import React from 'react'
import PropTypes from 'prop-types'

const Strong = ({ content }) => (
    <strong>{content}</strong>
)

Strong.propTypes = {
    content: PropTypes.string.isRequired,
};
Strong.defaultProps = {
    content: 'sample content'
};

export default Strong;