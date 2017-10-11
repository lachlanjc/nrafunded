import React from 'react'
import PropTypes from 'prop-types'

const Pill = ({ className, ...props }) => (
  <a className={`pill ${className || ''}`} {...props} />
)

Pill.propTypes = {
  className: PropTypes.string
}

export default Pill
