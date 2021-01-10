import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ content = 'Sample heading', size = 1 }) => {
   const renderHeading = () => {
      switch (size) {
         case 1:
            return <h1>{content}</h1>
         case 2:
            return <h2>{content}</h2>
         case 3:
            return <h3>{content}</h3>
         case 4:
            return <h4>{content}</h4>
         case 5:
            return <h5>{content}</h5>
         case 6:
            return <h6>{content}</h6>
         default:
            return <h1>{content}</h1>

      }
   }
   return renderHeading()
}

Heading.propTypes = {
   content: PropTypes.string,
   size: PropTypes.number
}

export default Heading