import React from 'react'
import { Provider, Container } from 'rebass'
import theme from './theme'

import Header from './Header'
import Search from './Search'
import Nav from './Nav'
import Footer from './Footer'

import css from './app.css'
import analysis from '../docs/analysis.html'
import body from '../docs/body.html'

const App = () => (
  <Provider theme={theme}>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Header />
    <Container is="article" width={48 * 16} px={2} py={4}>
      <Search />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: analysis }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
    <Footer />
  </Provider>
)

export default App
