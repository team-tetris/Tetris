import React from 'react'
import Tetris from '../../index'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
export default { title: 'Badge component', decorators: [withKnobs] }
export const badge = () => {
  const content = text('Content', 'primary')

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
  const theme = select('theme', types, 'primary')
  const rounded = boolean('rounded', false)
  return <Tetris tetromino={{ type: "badge", theme: theme, content: content, rounded: rounded }} />
}