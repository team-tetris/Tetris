import React from 'react';
import Button from './components/button';

const Tetris = ({ theme, size, message, outline }) => {
    return <Button theme={theme} size={size} message={message} outline={outline} />
}

export default Tetris;