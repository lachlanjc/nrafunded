
import React from 'react'
import {
  Base,
  Heading,
  Text,
} from 'rebass'
import { Flex } from 'reflexbox'

const Pill = ({ className, ...props }) => (
  <a className={`pill ${className || ''}`} {...props} />
)

const Header = () => (
  <Base is='header' className='bg-red white'>
    <Base is='article' px={2} py={4} className='mw7 center'>
      <Heading level={1}>NRA Funded</Heading>
      <p className='mt2 mb2'>
        Congress is supposed to represent the people, yet many are being paid by
        the NRA to keep quiet about gun violence.
      </p>
      <p className='mt2 mb2'>
        We must speak out.
      </p>
      <div className='flex items-center mt2 mb2'>
        <span className='sm-show pr1'>
          Built by
        </span>
        <Pill href='https://lachlanjc.me/' children='@lachlanjc' />
        <span className='pl1 pr1'> – </span>
        <span className='sm-show pr1'>
          Contribute on
        </span>
        <Pill href='https://github.com/lachlanjc/nrafund/' children='GitHub' />
      </div>
      <footer style={{ opacity: '.8', fontWeight: 500 }}>
        <Text small>
          Funding data from the Center for Responsive Politics, 2014
        </Text>
        <Text small>
          Gun violence data from the Gun Violence Archive, 2014
        </Text>
      </footer>
    </Base>
  </Base>
)

export default Header
