import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, width = 16, height = 16, ...props }) => (
  <svg {...props} width={width} height={height}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Icon
