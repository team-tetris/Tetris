import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Badge = ({ content = 'Sample ', theme = 'primary', rounded = false }) => (
   <span className={`badge ${rounded ? 'rounded-pill' : null} bg-${theme}`}>{content}</span>
)
export default Badge