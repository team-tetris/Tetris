import React from 'react'
import Tetris from '../../index'
import { withKnobs, text, select } from '@storybook/addon-knobs'
export default { title: 'Text component', decorators: [withKnobs] }
export const Texts = () => {
  const content = text('Text', 'New Text')
  const sizeVariants = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6
  }
  const size = select('size', sizeVariants, undefined)
  return <Tetris tetromino={{ type: "text", size: size, content: content }} />
}