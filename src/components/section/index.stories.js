import React from 'react'
import Section from './index'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Section component', decorators: [withKnobs] }
export const section = () => {

    return <Section tetromino={[
        {
            type : 'container',
            count : 12,
            tetromino : [{
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
              }]
        }
    ]}/>
}