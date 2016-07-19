
import React from 'react'
import _ from 'lodash'
import {
  Base,
  Heading,
} from 'rebass'
import commaNumber from 'comma-number'
import states from '../data/data.json'
import violence from '../data/violence.json'

const Stat = ({
  value,
  label,
  unit,
  ...props
}) => (
  <div className='stat' {...props}>
    <div className='stat-value'>
      {value}
      {unit &&
        <span
          className={`stat-unit ${unit === '%' ? 'percent' : 'text'}`}
          children={unit}
        />
      }
    </div>
    {label && <span className='stat-label' children={label} />}
  </div>
)

const Analysis = () => {
  let people = []
  let funding = []
  _.forEach(states, state => {
    _.forEach(state.people, p => {
      people.push(p)
      funding.push(p.funding)
    })
  })
  let fundedPeople = _.filter(people, p => {
    return p.funding > 0
  })
  let democrats = _.filter(people, ['party', 'Democrat'])
  let republicans = _.filter(people, ['party', 'Republican'])
  let fundedRepublicans = _.filter(fundedPeople, ['party', 'Republican'])
  // let fundedDemocrats = _.filter(people, p => {
  //   return p.funding !== 0 && p.party === 'Republican'
  // })
  let males = _.filter(people, ['person.gender', 'male'])
  let fundedMales = _.filter(fundedPeople, ['person.gender', 'male'])
  return (
    <Base my={3}>
      <Heading
        level={2}
        theme='primary'
        mt={0} pb={1} mb={2}
        _className='bb'
        children='NRA funding'
      />
      <article className='md-flex items-center flex-wrap stats-wide'>
        {/*
          <Stat
            label='Funded'
            unit='people'
            value={_.pull(funding, 0).length}
          />
        */}
        <Stat
          label='of Congress members received funding'
          value={_.round((_.pull(funding, 0).length * 100) / people.length, 1)}
          unit='%'
        />
        <Stat
          label='Candidate/PAC/party contributions'
          unit='USD'
          value='808,462'
        />
        <Stat
          label='Total lobbying for federal election'
          unit='USD'
          value='3,360,000'
        />
        <Stat
          label='All federal election spending'
          unit='USD'
          value='27,024,618'
        />
        <Stat
          label='Congress Republicans percentage'
          unit='%'
          value={_.round((republicans.length * 100) / people.length, 1)}
        />
        <Stat
          label='of those funded are Republicans'
          unit='%'
          value={_.round((fundedRepublicans.length * 100) / fundedPeople.length, 1)}
        />
        <Stat
          label='Congress male percentage'
          unit='%'
          value={_.round((males.length * 100) / people.length, 1)}
        />
        <Stat
          label='of those funded are men'
          unit='%'
          value={_.round((fundedMales.length * 100) / fundedPeople.length, 1)}
        />
      </article>
      <Heading
        level={2}
        theme='primary'
        my={3} pb={1}
        _className='bb'
        children='Gun violence (2014)'
      />
      <article className='md-flex items-center flex-wrap stats-narrow'>
        <Stat
          label='Incidents'
          value={violence.incidents}
        />
        <Stat
          label='Deaths'
          value={violence.deaths}
        />
        <Stat
          label='Injuries'
          value={violence.injuries}
        />
        <Stat
          label='Children killed/injured'
          value={violence.kids}
        />
        <Stat
          label='Teens killed/injured'
          value={violence.teens}
        />
        <Stat
          label='Mass shootings (4+ people)'
          value={violence.masses}
        />
      </article>
    </Base>
  )
}

export default Analysis
