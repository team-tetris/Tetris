import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Image = ({ source = '', size, rounded = false, height, width }) => {
   return <img src={source} className={`${rounded ? 'rounded' : ''} ${size}`} height={height && width ? height : undefined} width={height && width ? width : undefined} />
}
export default Image