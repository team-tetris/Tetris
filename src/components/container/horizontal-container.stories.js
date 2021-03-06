import React from 'react'
import Tetris from '../../index'
import { withKnobs, select } from '@storybook/addon-knobs'
export default { title: 'Horizontal container', decorators: [withKnobs] }
export const horizontalContainer = () => {

    const tetromino = [
        {
            type: 'container',
            count: 6,
            tetromino: [{
                type: 'image',
                source: 'https://dummyimage.com/600x400/000/fff',
                size: 'img-fluid'
            },]
        },
        {
            type: 'container',
            count: 6,
            tetromino: [
                {
                    type: 'heading',
                    content: 'card heading',
                    size: 5
                },
                {
                    type: 'heading',
                    content: 'sub heading',
                    size: 6,
                },
                {
                    type: 'text',
                    content: 'text  content for card '
                }
            ]
        }


    ]



    const count = select("Count", { 12: 12, 2: 2, 3: 3, 4: 4, 6: 6 }, 6)

    return <Tetris tetromino={{ type: "container", tetromino: tetromino, count: count }} />
}