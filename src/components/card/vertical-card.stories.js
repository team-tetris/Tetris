import React from 'react'
import Tetris from '../../index'
import { withKnobs, select } from '@storybook/addon-knobs'
export default { title: 'Card component', decorators: [withKnobs] }
export const card = () => {

  const tetromino = [
    {
      type: 'cardImage',
      source: 'https://dummyimage.com/600x400/000/fff',
    },
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
      content: 'text content for card'
    }
    , {
      type: 'button',
      content: 'click ',
      theme: 'danger',
    },
    {
      type: 'badge',
      content: 'improvement',
      rounded: true
    }
  ]
  const aligntypes = {
    left: 'left', center: 'center', right: 'right'
  }

  const align = select('align', aligntypes)

  return <Tetris tetromino={{ type: "card", tetromino: tetromino, align: align }} />
}