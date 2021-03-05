import React from 'react'
import Tetris from '../../index'
import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'Strong component', decorators: [withKnobs] }
export const strong = () => {
    const content = text('Content', 'primary')
    return <Tetris tetromino={{ type: "strong", content: content }} />
}