import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const SectionHeading = ({ name, ...props }) => (
  <Text
    {...props}
    is="h2"
    color="primary"
    mt={0}
    mb={1}
    pb={1}
    className="section-heading"
  >
    <span className="section-heading__name">{name}</span>
  </Text>
)

SectionHeading.propTypes = {
  name: PropTypes.string.isRequired
}

export default SectionHeading
