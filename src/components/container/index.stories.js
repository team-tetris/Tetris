import React from 'react'
import Container from './index'
import { withKnobs, select } from '@storybook/addon-knobs'
export default { title: 'Container component', decorators: [withKnobs] }
export const container = () => {

  const tetromino = [{
    type: 'card',
    tetromino: [{
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
    ]
  },
  {
    type: 'card',
    tetromino: [{
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
      content: 'text  content for card '
    }]
  },
  {
    type: 'card',
    tetromino: [{
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
      content: 'text  content for card '
    }]
  },
  {
    type: 'card',
    tetromino: [{
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
      content: 'text  content for card '
    }]
  },
  {
    type: 'card',
    tetromino: [{
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
      content: 'text  content for card '
    }]
  },
  ]

  const count = select("Count", { 12: 12, 2: 2, 3: 3, 4: 4, 6: 6 }, 3)

  return <Container tetromino={tetromino} count={count} />
}