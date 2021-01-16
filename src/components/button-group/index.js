import React from 'react'
import Button from '../button'

const ButtonGroup = ({ tetromino, size }) => (
    <div className={`btn-group ${size === 'large' ? 'btn-group-lg' : size === 'small' ? 'btn-group-sm' : undefined}`} role="group" aria-label="Basic outlined example">
        {tetromino.map((button) => <Button key={Math.random()} content={button.content} theme={button.theme} outline />)}
    </div>
)

export default ButtonGroup