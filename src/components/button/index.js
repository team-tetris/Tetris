import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Button = ({ content = 'Sample button', theme = 'primary', outline = 'false', size }) => (
   <button className={`btn btn${outline ? `-outline` : ''}-${theme} ${size ? size === 'large' ? 'btn-lg' : size === 'small' ? 'btn-sm' : '' : ''}`}>{content}</button>
)
export default Button