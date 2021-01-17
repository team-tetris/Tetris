import React from 'react'
import Image from './index.js'
import { withKnobs, text, select } from '@storybook/addon-knobs'
export default { title: 'Image component', decorators: [withKnobs] }
export const image = () => {
  const source = text('source', 'https://dummyimage.com/600x400/000/fff')
  const rounded = select('rounded', { rounded: 'rounded', circle: 'rounded-circle' }, null)
  const sizeVariants = {
    'select a size': 'null',
    fluid: 'img-fluid',
    thumbnail: 'img-thumbnail',
  }
  const height = text('height', '')
  const width = text('width', '')

  const size = select('size', sizeVariants,)
  return <Image rounded={rounded} size={size} source={source} height={height} width={width} />
}