import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import renderCardTetromino from './card.tetromino'

const Card = ({ tetromino, align }) => (
    <div className="card">
        {tetromino.map((obj) => obj.type === 'card-image' ? renderCardTetromino(obj) : null)}
        <div className={`card-body${align ? ` text-${align}` : ''}`}>
            {tetromino.map((obj) => obj.type !== 'card-image' ? renderCardTetromino(obj) : null)}
        </div >
    </div >
)
export default Card