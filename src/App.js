
import React from 'react'
import { Container } from 'rebass'

import Header from './Header'
import Search from './Search'
import Nav from './Nav'
import Footer from './Footer'

/* eslint-disable no-unused-vars */
import styles from './css/app.css'
import tooltips from './css/tooltips.css'
import utilities from './css/utilities.css'
/* eslint-enable no-unused-vars */

import analysis from '../public/analysis.html'
import rendered from '../public/rendered.html'

const App = () => (
  <main>
    <Header />
    <Container is='article' px={2} style={{ maxWidth: '48rem' }}>
      <Search />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: analysis }} />
      <div dangerouslySetInnerHTML={{ __html: rendered }} />
    </Container>
    <Footer />
  </main>
)

export default App
