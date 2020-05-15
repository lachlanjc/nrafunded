import React from 'react'
import { Box, Link } from 'rebass'

const FooterLink = props => (
  <Link
    style={{
      textDecoration: 'none',
      paddingLeft: 4,
      paddingRight: 4
    }}
    {...props}
  />
)

const Footer = () => (
  <Box
    is="footer"
    px={2}
    py={4}
    bg="gray2"
    color="midgray"
    style={{
      textAlign: 'center'
    }}
  >
    <section>
      Created by
      <FooterLink href="https://lachlanjc.com/" children="@lachlanjc" />
      in 2017 –
      <FooterLink
        href="https://github.com/lachlanjc/nrafunded/"
        children="Contribute on GitHub"
      />
    </section>
  </Box>
)

export default Footer
