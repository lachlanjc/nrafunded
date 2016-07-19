
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Base, Heading, NavItem } from 'rebass'
import _ from 'lodash'

const states = require('../data/states.json')

const Nav = () => (
  <Base my={3}>
    <Heading
      level={2}
      theme='primary'
      mt={0} pb={1} mb={2}
      _className='bb'
      children='or jump to your state…'
    />
    <Flex wrap gutter={1}>
      {_.map(states, s => (
        <Box key={s.id}>
          <NavItem
            href={`#${s.abbrev}`}
            title={s.name}
            is='a'
            children={s.name}
          />
        </Box>
      ))}
    </Flex>
  </Base>
)

export default Nav
