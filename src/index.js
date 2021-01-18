import renderTetrisComponent from './utils/tetromino'
require('./bootstrap.min.css')

const Tetris = (props) => {
    return renderTetrisComponent(props);
}

export default Tetris;