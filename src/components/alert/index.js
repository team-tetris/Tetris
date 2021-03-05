import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shadow from '../shadow'

class Alert extends Component {
   constructor(props) {
      super(props);
   }
   state = { show: true };
   toggleShow = () => {
      const { show } = this.state
      this.setState({ show: !show })
   }
   render() {
      const { content = 'A simple primary alert—check it out!', theme = 'primary', heading, close, shadow, classes } = this.props
      const { show } = this.state
      return show && <div className={`${Shadow(shadow)} alert alert-${theme} ${close ? `alert-dismissible fade show` : ''} ${classes}`} role="alert">
      {heading && <>
         <h4 className="alert-heading">{heading}</h4>
         <hr />
      </>}
      {content}
         {close && <button type="button" className="btn-close" aria-label="Close" onClick={() => this.toggleShow(false)}></button>}
   </div>
   }
}

Alert.propTypes = {
   content: PropTypes.string,
   theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
   heading: PropTypes.string,
   close: PropTypes.bool,
}

export default Alert

