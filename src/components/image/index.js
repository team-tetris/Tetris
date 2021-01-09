import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Image = ({ source, size, rounded = false, height, width, classname }) => {
   return <img src={source} className={`${rounded ? 'rounded' : ''} ${size ? size : ''} ${classname ? classname : ''}`} height={height && width ? height : undefined} width={height && width ? width : undefined} />
}
export default Image