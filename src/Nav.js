import React from 'react'
import { Flex, Box, NavLink } from 'rebass'
import { map } from 'lodash'

import Section from './Section'
import SectionHeading from './SectionHeading'
const states = require('../data/states.json')

const Nav = () => (
  <Section>
    <SectionHeading name="or jump to your state…" />
    <Flex wrap mx={-2}>
      {map(states, s => (
        <Box key={s.id}>
          <NavLink href={`#${s.abbrev}`} title={s.name} children={s.name} />
        </Box>
      ))}
    </Flex>
  </Section>
)

export default Nav
