import React from 'react'
import Icon from './index.js'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
export default { title: 'Icon component', decorators: [withKnobs] }
export const icon = () => {


  const center = boolean('center')
  const content = text('content', 'home')
  const shape = select('colors', {
    primary: 'primary', success: 'success', danger: 'danger'
  }, 'danger')

  const size= select('size', {
1: '1' , 2 : '2' , 3 : '3',4 : '4',5:'5',6:'6'
  }, 1)
  return <Icon content={content} shape={shape} center={center} size={size} />
}