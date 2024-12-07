import React from 'react'
import './Button.css'

// eslint-disable-next-line react/prop-types
function Button({ buttonStyle = '', children, ...props }) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children}
    </button>
  )
}

export default Button
