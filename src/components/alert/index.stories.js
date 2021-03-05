import React from 'react'
import Tetris from '../../index'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Alert component', decorators: [withKnobs] }
export const alert = () => {
  const content = text('content', 'Alert content here')
  const types = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    light: 'light',
    dark: 'dark',
    link: 'link'
  }
  const heading = text('heading')
  const theme = select('theme', types, 'primary')
  const close = boolean('show close button');
  return <Tetris tetromino={{ type: "alert", theme: theme, content: content, heading: heading, close: close }} />
}