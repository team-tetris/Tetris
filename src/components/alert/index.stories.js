import React from 'react'
import Alert from './index.js'
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
  return <Alert theme={theme} content={content} heading={heading} close={close} />
}