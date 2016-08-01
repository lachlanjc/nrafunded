
import React from 'react'
import moment from 'moment'
import commaNumber from 'comma-number'

import RepSocial from './RepSocial'

const Representative = ({ data, ...props }) => (
  <div
    className={`Card ${data.funding ? 'bg-stain' : 'bg-white'}`}
    id={`${data.state}-${data.person.lastname}`}
    >
    <h3 className='name'>
      {data.person.firstname} {data.person.lastname}
      <RepBadge party={data.party} />
    </h3>
    <p className='role' children={data.role_type_label} />
    <RepDates startdate={data.startdate} enddate={data.enddate} />
    {data.funding ? <RepFunding funding={data.funding} /> : null}
    <RepSocial
      twitterid={data.person.twitterid}
      phone={data.phone}
      website={data.website}
      contact={data.extra ? data.extra.contact_form : null}
    />
  </div>
)

const RepBadge = ({ party, ...props }) => {
  const label = party === 'Republican' ? 'R' : 'D'
  const theme = label === 'R' ? 'red' : 'blue'
  return (
    <span className={`badge bg-${theme} ml1`} children={label} {...props} />
  )
}

const RepDates = ({ startdate, enddate, ...props }) => (
  <div aria-label='Term dates' className='flex items-center tooltipped dates'>
    <svg width={16} height={16}>
      <use xlinkHref='#clock' />
    </svg>
    <span className='pl1'>
      {moment(startdate).format('MMM D, YYYY')} - {moment(enddate).format('MMM D, YYYY')}
    </span>
  </div>
)

const RepFunding = ({ funding, ...props }) => (
  <div className='flex items-center mt1 red'>
    <svg width={16} height={16}>
      <use xlinkHref='#medal' />
    </svg>
    <span className='pl1'>
      Funding: {' '}
      <strong style={{ fontWeight: 600 }}>
        ${commaNumber(funding)}
      </strong>
    </span>
  </div>
)

export default Representative
