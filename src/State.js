
import React from 'react'
import _ from 'lodash'

import Representative from './Representative'

const State = ({ name, abbrev, people, ...props }) => (
  <section id={abbrev} {...props}>
    <h2 className='state' children={name} />
    <People people={people} />
  </section>
)

const People = ({ people }) => (
  <article className='md-flex people'>
    {_.map(people, person => (
      <Representative data={person} key={person.id} />
    ))}
  </article>
)

export default State
