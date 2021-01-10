import React from 'react'
import Progress from './index.js'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Progress component', decorators: [withKnobs] }
export const progress = () => {
    const classname = text('class', '')
    const types = {
        primary: undefined,
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger'
    }
    const theme = select('theme', types, 'primary')
    const content = text('now', '25')
    const striped = boolean('striped', false)
    const animated = boolean('animated', false)
    return <Progress classname={classname} theme={theme} content={content} striped={striped} animated={animated} />
}