import React from 'react'

import { Provider } from 'rebass'
import theme from './theme'

import Statistics from './Statistics'
import Violence from './Violence'

const Analysis = () => (
  <Provider theme={theme}>
    <Statistics />
    <Violence />
  </Provider>
)

export default Analysis
