import React from 'react'
import Card from './index.js'
import { withKnobs, select } from '@storybook/addon-knobs'
export default { title: 'Card component', decorators: [withKnobs] }
export const card = () => {

  const tetromino = [
    {
      type: 'card-image',
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

  return <Card tetromino={tetromino} align={align} />
}