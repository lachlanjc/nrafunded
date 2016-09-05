import React, { PropTypes } from 'react'
import { Blockquote } from 'rebass'
import { Flex, Box } from 'reflexbox'
import _ from 'lodash'

import CandidatePhoto from './CandidatePhoto'

const Candidate = ({
  name,
  color,
  quote,
  href
}) => (
  <Flex align='center' mt={2}>
    <CandidatePhoto
      src={`/img/${_.lowerCase(_.split(name, ' ', 1))}.jpg`}
      href={href}
    />
    <Box auto>
      <Blockquote
        source={name}
        href={href}
        color={color}
        children={quote}
      />
    </Box>
  </Flex>
)

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Candidate
