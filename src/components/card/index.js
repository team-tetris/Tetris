import React from 'react'
import renderCardTetromino from './card.tetromino'
import PropTypes from 'prop-types'
import Shadow from '../shadow'
const Card = ({ tetromino, align, shadow,classes }) => {
 return   <div className={`card ${Shadow(shadow)} ${classes}`}>
        {tetromino.map((obj) => obj.type === 'card-image' ? renderCardTetromino(obj) : null)}
        <div className={`card-body${align ? ` text-${align}` : ''}`}>
            {tetromino.map((obj) => obj.type !== 'card-image' ? renderCardTetromino(obj) : null)}
        </div >
    </div >
}

Card.propTypes = {
    tetromino: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
            }),
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                source: PropTypes.string.isRequired,
            }),
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                tetromino: PropTypes.array
            })
        ])
    ),
    align: PropTypes.string
}
export default Card