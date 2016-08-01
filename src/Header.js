
import React from 'react'
import {
  Base,
  Heading,
  Text
} from 'rebass'

const Pill = ({ className, ...props }) => (
  <a className={`pill ${className || ''}`} {...props} />
)

const LachlanLink = () => (
  <Pill href='https://lachlanjc.me/' children='@lachlanjc' />
)

const TwitterLink = () => {
  const text = 'Find out if your Congress members are receiving funding from the NRA —'
  const url = 'https://nrafunded.us/'
  const tweetUrl = `https://twitter.com/share?text=${text}&url=${url}`
  return (
    <Pill
      href={tweetUrl}
      style={{ color: '#1da1f2' }}
      children='Tweet this'
    />
  )
}

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
        <LachlanLink />
        <span className='pl1 pr1'> – </span>
        <TwitterLink />
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
