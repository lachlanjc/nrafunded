
import React from 'react'
import {
  Base,
  Heading,
  Text,
  Button,
  Space,
} from 'rebass'
import { Flex } from 'reflexbox'

const SmallPill = ({ ...props }) => (
  <Button
    backgroundColor='white' color='red' pill
    style={{
      minHeight: 8,
      padding: '4px 8px',
    }}
    {...props}
  />
)

const Header = () => (
  <Base is='header' className='bg-red white'>
    <Base is='article' px={2} py={4} className='mw7 center'>
      <Heading level={1}>NRA Funded</Heading>
      <Text my={1}>
        Congress is supposed to represent the people, yet many are being paid by
        the NRA to keep quiet about gun violence.
      </Text>
      <Text mb={1}>
        We must speak out.
      </Text>
      <Flex align='center' my={2} wrap>
        <span className='sm-show'>
          Built by
          <Space x={1} />
        </span>
        <SmallPill href='https://lachlanjc.me/' children='@lachlanjc' />
        <Space x={1} /> – <Space x={1} />
        <span className='sm-show'>
          Contribute on
          <Space x={1} />
        </span>
        <SmallPill href='https://github.com/lachlanjc/nrafund/' children='GitHub' />
      </Flex>
      <Base is='footer' style={{ opacity: '.8', fontWeight: 500 }}>
        <Text small>
          Gun violence data from the Gun Violence Archive, 2014
        </Text>
        <Text small>
          Funding data from the Center for Responsive Politics, 2014 cycle
        </Text>
      </Base>
    </Base>
  </Base>
)

export default Header
