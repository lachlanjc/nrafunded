import React from 'react'
import commaNumber from 'comma-number'

import Section from './Section'
import SectionHeading from './SectionHeading'
import Stat from './Stat'
import StatGraph from './StatGraph'

import stats from '../data/analysis'
const { percentages, funding } = stats

const Statistics = () => (
  <Section>
    <SectionHeading name="NRA funding (2016)" />
    <article className="md-flex items-center flex-wrap stats-wide">
      <Stat
        label="of Congress received NRA funding"
        unit="%"
        value={funding.percent}
      />
      <Stat
        label="Total NRA budget for government lobbying"
        unit="$"
        value={commaNumber(funding.lobbying)}
      />
      <Stat
        label="Lobbying for Democrats"
        unit="$"
        value={commaNumber(funding.forDems)}
      />
      <Stat
        label="Lobbying against Democrats"
        unit="$"
        value={commaNumber(funding.antiDems)}
      />
      <Stat
        label="Lobbying for Republicans"
        unit="$"
        value={commaNumber(funding.forRepubs)}
      />
      <Stat
        label="Lobbying against Republicans"
        unit="$"
        value={commaNumber(funding.antiRepubs)}
      />
      <Stat
        label={`${percentages.republicans.label} of US Congress members are Republicans`}
        value={
          <StatGraph color="primary" value={percentages.republicans.value} />
        }
      />
      <Stat
        label={`${percentages.republicansFunded.label} of those funded are Republicans`}
        value={
          <StatGraph
            color="error"
            value={percentages.republicansFunded.value}
          />
        }
      />
      <Stat
        label={`${percentages.males.label} of US Congress members are men`}
        unit="%"
        value={<StatGraph color="primary" value={percentages.males.value} />}
      />
      <Stat
        label={`${percentages.malesFunded.label} of those funded are men`}
        unit="%"
        value={
          <StatGraph color="error" value={percentages.malesFunded.value} />
        }
      />
    </article>
  </Section>
)

export default Statistics
