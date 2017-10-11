import React from 'react'
import { Banner, Flex, Container, Heading, Text } from 'rebass'

import Pill from './Pill'
import TwitterLink from './TwitterLink'

const Header = () => (
  <Banner
    is="header"
    bg="red"
    color="white"
    style={{ minHeight: 256, textAlign: 'center' }}
  >
    <Container width={48 * 16} py={4}>
      <Heading f={6}>NRA Funded</Heading>
      <Text f={4} my={2}>
        The NRA is paying off Congress at the expense of lives.
      </Text>
      <Flex justify="center" align="center" mt={3} mb={2}>
        <span className="sm-show pr1">Built by</span>
        <Pill href="https://lachlanjc.glitch.me/" children="@lachlanjc" />
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
