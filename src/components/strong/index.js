import React from 'react'
const Strong = ({ content }) => (
    <strong>{content}</strong>
)

Strong.propTypes = {
    content: PropTypes.string
};
Strong.defaultProps = {
    content: 'sample content'
};

export default Strong;