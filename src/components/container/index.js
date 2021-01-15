import React from 'react'
import renderContainerTetromino from './container.tetromino'
const Container = ({ tetromino, count, gutter = 3 }) => {
    return <div className={`row col-12 g-${gutter}`}>
        {tetromino.map((component) => {
            return renderContainerTetromino(component, count)
        })}
    </div >
}

export default Container;