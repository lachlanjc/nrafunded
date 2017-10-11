import React from 'react'
import { Provider } from 'rebass'
import theme from './theme'
import { map } from 'lodash'

import Icons from './Icons'
import State from './State'
const states = require('../data/data.json')

const Body = () => (
  <Provider theme={theme}>
    <Icons />
    {map(states, ({ name, abbrev, id, people }) => (
      <State name={name} abbrev={abbrev} people={people} key={id} />
    ))}
  </Provider>
)

export default Body
