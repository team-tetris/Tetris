import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ content = 'Sample heading', size = 1 ,classes}) => {
   const renderHeading = () => {
      switch (size) {
         case 1:
            return <h1 className={classes}>{content}</h1>
         case 2:
            return <h2 className={classes}>{content}</h2>
         case 3:
            return <h3 className={classes}>{content}</h3>
         case 4:
            return <h4 className={classes}>{content}</h4>
         case 5:
            return <h5 className={classes}>{content}</h5>
         case 6:
            return <h6 className={classes}>{content}</h6>
         default:
            return <h1 className={classes}>{content}</h1>

      }
   }
   return renderHeading()
}

Heading.propTypes = {
   content: PropTypes.string,
   size: PropTypes.number
}

export default Heading