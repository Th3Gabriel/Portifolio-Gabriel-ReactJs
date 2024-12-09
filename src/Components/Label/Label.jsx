import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

function Label({ labelName = '', children = null, className = '', ...props }) {
  return (
    <span className={`label ${className}`} {...props}>
      {labelName || children}
    </span>
  )
}

Label.propTypes = {
  labelName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Label
