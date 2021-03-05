import React from 'react'
import Tetris from '../../index'
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
  return <Tetris tetromino={{ type: "button-group", size: size, tetromino: tetromino }} />
}