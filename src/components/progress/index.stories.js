import React from 'react'
import Tetris from '../../index.js'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Progress component', decorators: [withKnobs] }
export const progress = () => {
    const classes = text('class', '')
    const types = {
        primary: '',
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger'
    }
    const theme = select('theme', types, 'primary')
    const content = text('now', '25')
    const striped = boolean('striped', false)
    const animated = boolean('animated', false)
    return <Tetris tetromino={{ type: "progress", classname: classes, theme: theme, content: content, striped: striped, animated: animated }} />
}