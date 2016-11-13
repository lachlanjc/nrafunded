import React from 'react'
import {
  Base,
  Heading,
  Text
} from 'rebass'

import Pill from './Pill'
import TwitterLink from './TwitterLink'

const Header = () => (
  <Base is='header' className='bg-red white'>
    <Base is='article' px={2} py={4} className='mw7 center'>
      <Heading level={1}>NRA Funded</Heading>
      <p className='mt2 mb2'>
        Many of our US Congress members receive funding from the NRA and are keeping quiet about the gun violence in this country.
      </p>
      <p className='mt2 mb2'>
        Find out who represents you in Congress and if they're being funded.
      </p>
      <div className='flex items-center mt2 mb2'>
        <span className='sm-show pr1'>
          Built by
        </span>
        <Pill href='https://lachlanjc.me/' children='@lachlanjc' />
        <span className='pl1 pr1'> – </span>
        <TwitterLink
          text='Find out if your Congress members are receiving funding from the NRA —'
        />
      </div>
      <footer style={{ opacity: '.8', fontWeight: 500 }}>
        <Text small>
          Funding data from the Center for Responsive Politics, 2016
        </Text>
        <Text small>
          Gun violence data from the Gun Violence Archive, 2015
        </Text>
      </footer>
    </Base>
  </Base>
)

export default Header
