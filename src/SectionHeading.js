
import React from 'react'
import { Heading } from 'rebass'

const SectionHeading = (props) => (
  <Heading
    {...props}
    level={2}
    theme='primary'
    mt={0}
    pb={1}
    mb={2}
    _className='bb'
  />
)

export default SectionHeading
