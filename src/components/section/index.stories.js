import React from 'react'
import Section from './index'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Section component', decorators: [withKnobs] }
export const section = () => {
const shape = select('shape', {circle : 'circle',square : 'square' , triangle : 'triangle'})
const background = select('background', {default : 'default', dark : 'dark', primary : 'primary'},'primary')
    return <Section
    shape={shape}
    background={background}
     tetromino={[
        {
            type : 'container',
            count : 12,
            tetromino : [{
                type: 'card',
                classes: 'transform', 
                tetromino: [{
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
                  content: 'text  content for card '
                }]
              },
              {
                type: 'card',
                classes: 'transform', 
                tetromino: [{
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
                  content: 'text  content for card '
                }]
              }]
        }
    ]}/>
}