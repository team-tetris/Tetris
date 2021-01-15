import React from 'react'
import Accordion from './index.js'
import { withKnobs } from '@storybook/addon-knobs'
export default { title: 'Accordion component', decorators: [withKnobs] }
export const accordion = () => {
    const tetromino = [{
        type: 'accordion-content',
        title: '1',
        content: 'text 1'
    },
    {
        type: 'accordion-content',
        title: '2',
        content: 'text 2'
    },
    {
        type: 'accordion-content',
        title: '3',
        content: 'text 3'
    }
    ]
    return <Accordion tetromino={tetromino} />
}