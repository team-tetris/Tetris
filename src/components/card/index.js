import React from 'react'
import renderCardTetromino from './card.tetromino'
import PropTypes from 'prop-types'
const Card = ({ tetromino, align }) => (
    <div className="card">
        {tetromino.map((obj) => obj.type === 'card-image' ? renderCardTetromino(obj) : null)}
        <div className={`card-body${align ? ` text-${align}` : ''}`}>
            {tetromino.map((obj) => obj.type !== 'card-image' ? renderCardTetromino(obj) : null)}
        </div >
    </div >
)

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
            })
        ])
    ),
    align: PropTypes.string
}
export default Card