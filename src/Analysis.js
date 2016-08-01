
import React from 'react'
import _ from 'lodash'
import {
  Base,
  Heading,
  Progress
} from 'rebass'
import states from '../data/data.json'
import violence from '../data/violence.json'

const Stat = ({
  value,
  label,
  unit,
  ...props
}) => {
  let type
  if (unit) {
    if (unit === '%') type = 'stat--percentage'
    if (unit === '$') type = 'stat--dollars'
  }
  if (!_.isString(value) && !_.isNumber(value)) type = 'stat--graph'
  return (
    <div className='stat' {...props}>
      <span className={`stat__value ${type}`}>
        {value}
      </span>
      {label && <span className='stat__label' children={label} />}
    </div>
  )
}

const Analysis = () => {
  let people = []
  let funding = []
  _.forEach(states, state => {
    _.forEach(state.people, p => {
      people.push(p)
      funding.push(p.funding)
    })
  })
  const fundedPeople = _.filter(people, p => { return p.funding > 0 })
  const republicans = _.filter(people, ['party', 'Republican'])
  const republicansFunded = _.filter(fundedPeople, ['party', 'Republican'])
  const males = _.filter(people, ['person.gender', 'male'])
  const malesFunded = _.filter(fundedPeople, ['person.gender', 'male'])
  const values = {
    republicans: (republicans.length * 100) / people.length,
    republicansFunded: (republicansFunded.length * 100) / fundedPeople.length,
    males: (males.length * 100) / people.length,
    malesFunded: (malesFunded.length * 100) / fundedPeople.length
  }
  let stats = {}
  _.forEach(values, (value, key) => {
    stats[key] = `${_.round(value, 1)}%`
  })
  _.forEach(values, (value, key) => {
    values[key] = value / 100
  })
  return (
    <Base my={3}>
      <Heading
        level={2}
        theme='primary'
        mt={0} pb={1} mb={2}
        _className='bb'
        children='NRA funding (2014)'
      />
      <article className='md-flex items-center flex-wrap stats-wide'>
        <Stat
          label='of Congress received NRA funding'
          value={_.round((_.pull(funding, 0).length * 100) / people.length, 1)}
          unit='%'
        />
        <Stat
          label='Candidate/PAC/party contributions'
          unit='$'
          value='808,462'
        />
        <Stat
          label='Total NRA budget for federal lobbying'
          unit='$'
          value='3,360,000'
        />
        <Stat
          label='Total NRA federal election spending'
          unit='$'
          value='27,024,618'
        />
        <Stat
          label={`${stats.republicans} of US Congress members are Republicans`}
          value={
            <Progress
              color='primary'
              className='stat__graph'
              value={values.republicans}
            />
          }
        />
        <Stat
          label={`${stats.republicansFunded} of those funded are Republicans`}
          value={
            <Progress
              color='error'
              className='stat__graph'
              value={values.republicansFunded}
            />
          }
        />
        <Stat
          label={`${stats.males} of US Congress members are men`}
          unit='%'
          value={
            <Progress
              color='primary'
              className='stat__graph'
              value={values.males}
            />
          }
        />
        <Stat
          label={`${stats.malesFunded} of those funded are men`}
          unit='%'
          value={
            <Progress
              color='error'
              className='stat__graph'
              value={values.malesFunded}
            />
          }
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
