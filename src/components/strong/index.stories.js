import React from 'react'
import Strong from './index.js'
import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'Strong component', decorators: [withKnobs] }
export const strong = () => {
    const content = text('Content', 'primary')
    return <Strong content={content} />
}