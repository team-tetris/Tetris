import React from 'react'
import Button from './index.js'
import Tetris from '../../index'
import { withKnobs, text,boolean, select } from '@storybook/addon-knobs'
export default { title: 'Button component', decorators: [withKnobs] }
export const button = () => {
  const message = text('Text', 'New button')

  const types = {
    primary: 'primary',
    secondary: 'secondary',
    success : 'success',
    danger: 'danger',
    warning : 'warning',
    info : 'info',
    light : 'light',
    dark :'dark',
    link : 'link'
  }
  const theme = select('theme', types, 'primary')
  const sizeVariants = {
    large :'large',
    small : 'small',
    medium : false
  }
  const size = select('size',sizeVariants)
  const outline = boolean('outline',false)
  return <Tetris tetromino={{ type: "button", theme: theme, size: size, content: message, outline: outline }} />
}