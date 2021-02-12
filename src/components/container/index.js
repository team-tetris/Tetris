import React from 'react'
import renderContainerTetromino from './container.tetromino'
const Container = ({ tetromino, count, gutter = 0, classes }) => {
    return <div className={`row col-12 ${gutter ? `g-${gutter}` : undefined} ${classes}`}>
        {tetromino.map((component, index) => {
            return renderContainerTetromino(component, count, index)
        })}
    </div >
}

export default Container;