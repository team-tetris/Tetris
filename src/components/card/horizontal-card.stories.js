import React from 'react'
import Tetris from '../../index'
import { withKnobs } from '@storybook/addon-knobs'
export default { title: 'horizontal card ', decorators: [withKnobs] }
export const horizontalCard = () => {

    const tetromino = [

        {
            type: 'container',
            count: 6,
            tetromino: [
                {
                    type: 'container',
                    count: 6,
                    tetromino: [{
                        height: '100%',
                        width: '100%',
                        type: 'image',
                        source: 'https://dummyimage.com/600x400/000/fff',
                        size: 'img-fluid'
                    }]
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
                }]
        }


    ]

    return <Tetris tetromino={{ type: "card", tetromino: tetromino }} />
}