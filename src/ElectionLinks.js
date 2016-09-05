import React from 'react'
import {
  Block,
  Heading
} from 'rebass'

import Candidate from './Candidate'

const ElectionLinks = () => (
  <Block
    backgroundColor='#f4f7f9'
    p={2}
    mt={3}
    mb={0}
    rounded
    style={{
      border: '1px solid #dae4eb'
    }}>
    <Heading
      level={2}
      pb={1}
      color='black'
      _className='bb'
      style={{ marginBottom: 24 }}
      children='Clinton vs. Trump on gun control'
    />
    <Candidate
      name='Hillary Clinton'
      color='blue'
      quote='We can—and must—end the epidemic of gun violence.'
      href='https://www.hillaryclinton.com/issues/gun-violence-prevention/'
    />
    <Candidate
      name='Donald Trump'
      color='red'
      quote='Protecting our second amendment rights will Make America Great Again.'
      href='https://www.donaldjtrump.com/positions/second-amendment-rights'
    />
  </Block>
)

export default ElectionLinks
