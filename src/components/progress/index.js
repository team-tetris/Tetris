import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
const Progress = ({ classname, theme, content, min, max, striped, animated }) =>
    (<div className={`progress ${classname}`}>
        <div className={`progress-bar ${theme} ${striped ? 'progress-bar-striped' : ''} 
        ${animated ? 'progress-bar-animated' : ''}`}
            role="progressbar"
            aria-valuenow={content}
            aria-valuemin={min}
            style={{ width: content + '%' }}
            aria-valuemax={max}>{content + '%'}</div>
    </div>);

Progress.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    content: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool
};
Progress.defaultProps = {
    content: '5',
    min: 0,
    max: 100,
    striped: false,
    animated: false
};

export default Progress;
