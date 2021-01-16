import React from 'react'
import ButtonGroup from './index'
import { withKnobs, select } from '@storybook/addon-knobs'
export default { title: 'Button Group component', decorators: [withKnobs] }
export const buttonGroup = () => {

  const tetromino = [
    {
      type: 'button',
      theme: 'primary',
      content: 'button'
    },
    {
      type: 'button',
      theme: 'primary',
      content: 'button'
    }, {
      type: 'button',
      theme: 'primary',
      content: 'button'
    }, {
      type: 'button',
      theme: 'primary',
      content: 'button'
    },
  ]
  const size = select('Size', { large: "large", small: "small", normal: "normal" }, "normal")
  return <ButtonGroup tetromino={tetromino} size={size} />
}