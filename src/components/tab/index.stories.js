import React from 'react'
import Tab from './index.js'
import { withKnobs, boolean } from '@storybook/addon-knobs'
export default { title: 'Tab component', decorators: [withKnobs] }
export const tab = () => {
    const tetromino = [{
        type: 'tab-content',
        title: '1',
        content: 'text 1'
    },
    {
        type: 'tab-content',
        title: '2',
        content: 'text 2'
    },
    {
        type: 'tab-content',
        title: '3',
        content: 'text 3'
    }
    ]
    const pills = boolean('pill style', false)
    return <Tab tetromino={tetromino} pills={pills} />
}