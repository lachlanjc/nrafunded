import React from 'react'
import { Banner, Flex, Container, Heading, Text } from 'rebass'

import Pill from './Pill'
import TwitterLink from './TwitterLink'

const Header = () => (
  <Banner is="header" bg="red" color="white" style={{ minHeight: 256 }}>
    <Container width={48 * 16}>
      <Heading>NRA Funded</Heading>
      <Text my={2}>
        Many of our US Congress members receive funding from the NRA and are
        keeping quiet about the gun violence in this country.
      </Text>
      <Text my={2}>
        Find out who represents you in Congress and if they're being funded.
      </Text>
      <Flex align="center" my={2}>
        <span className="sm-show pr1">Built by</span>
        <Pill href="https://lachlanjc.me/" children="@lachlanjc" />
        <span className="pl1 pr1"> – </span>
        <TwitterLink text="Find out if your Congress members are receiving funding from the NRA —" />
      </Flex>
      <footer style={{ opacity: '.8', fontWeight: 500 }}>
        <Text f={1}>
          Funding data from the Center for Responsive Politics, 2016
        </Text>
        <Text f={1}>Gun violence data from the Gun Violence Archive, 2015</Text>
      </footer>
    </Container>
  </Banner>
)

export default Header
