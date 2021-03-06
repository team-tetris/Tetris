import React from 'react'
import PropTypes from 'prop-types';
const Progress = ({ theme, content, min, max, striped, animated, classes, showcontent }) =>
(<div className={`progress ${classes}`}>
    <div className={`progress-bar bg-${theme} ${striped ? 'progress-bar-striped' : ''} ${animated ? 'progress-bar-animated' : ''}`}
        role="progressbar"
        aria-valuenow={content}
        aria-valuemin={min}
        style={{width:`${content}%`}}
        aria-valuemax={max}>{showcontent ? `${content}%` : ''}</div>
</div>);

Progress.propTypes = {
    classname: PropTypes.string,
    theme: PropTypes.string,
    content: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool
};
Progress.defaultProps = {
    classname:'',
    content: '5',
    min: 0,
    max: 100,
    striped: false,
    animated: false
};

export default Progress;
