import React from 'react'
import { Provider, Container } from 'rebass'
import theme from './theme'

import Header from './Header'
import Search from './Search'
import Nav from './Nav'
import Footer from './Footer'

import styles from './css/app.css'
import tooltips from './css/tooltips.css'
import utilities from './css/utilities.css'

import analysis from '../public/analysis.html'
import body from '../public/body.html'

const App = () => (
  <Provider theme={theme}>
    <Header />
    <Container is="article" px={2} py={4} style={{ maxWidth: '48rem' }}>
      <Search />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: analysis }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
    <Footer />
  </Provider>
)

export default App
