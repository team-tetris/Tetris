import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Text = ({ content = 'Sample text', size }) => {
   return <p className={size < 6 ? `h${size}` : undefined}> {content}</p >
}
export default Text