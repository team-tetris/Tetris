import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Heading = ({ content = 'Sample heading', size = 1 }) => {
   const renderHeading = () => {
      switch (size) {
         case 1:
            return <h1>{content}</h1>
            break;
         case 2:
            return <h2>{content}</h2>
            break;
         case 3:
            return <h3>{content}</h3>
            break;
         case 4:
            return <h4>{content}</h4>
            break;
         case 5:
            return <h5>{content}</h5>
            break;
         case 6:
            return <h6>{content}</h6>
            break;
         default:
            return <h1>{content}</h1>

      }
   }
   return renderHeading()
}
export default Heading