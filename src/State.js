import React from 'react'
import { map } from 'lodash'

import StateName from './StateName'
import Representative from './Representative'

const State = ({ name, abbrev, people, ...props }) => (
  <section id={abbrev} {...props}>
    <StateName name={name} />
    <People people={people} />
  </section>
)

const People = ({ people }) => (
  <article className="md-flex people">
    {map(people, person => <Representative data={person} key={person.id} />)}
  </article>
)

export default State
