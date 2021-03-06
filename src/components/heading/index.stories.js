import React from 'react'
import Tetris from '../../index'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Heading component', decorators: [withKnobs] }
export const heading = () => {
  const content = text('Text', 'New button')
  const muted = boolean('Muted', true)
  const sizeVariants = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6
  }
  const size = select('size', sizeVariants)
  return <Tetris tetromino={{ type: "heading", muted: muted, size: size, content: content }} />
}