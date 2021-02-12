import renderTetrisComponent from './utils/tetromino'
require('./bootstrap.min.css')

const Tetris = (props) => {
    return props.tetromino.length > 1 ? props.tetromino.map((component,index) => renderTetrisComponent(component,index)) : renderTetrisComponent(props);
}

export default Tetris;