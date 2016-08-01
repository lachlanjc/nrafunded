
import React from 'react'
import moment from 'moment'
import commaNumber from 'comma-number'

import RepSocial from './RepSocial'

const Representative = ({ data, ...props }) => (
  <div
    className={`card ${data.funding ? 'bg-stain' : 'bg-white'}`}
    id={`${data.state}-${data.person.lastname}`}
    >
    <h3 className='name'>
      {data.person.firstname} {data.person.lastname}
      <RepBadge party={data.party} />
    </h3>
    <p className='role' children={data.role_type_label} />
    <div className='md-flex meta-container'>
      <RepDates startdate={data.startdate} enddate={data.enddate} />
      {data.funding ? <RepFunding funding={data.funding} /> : null}
    </div>
    <RepSocial
      phone={data.phone}
      twitterid={data.person.twitterid}
      contact={data.extra ? data.extra.contact_form : null}
      website={data.website}
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
  <div aria-label='Term dates' className='flex items-center tooltipped meta'>
    <svg width={16} height={16}>
      <use xlinkHref='#clock' />
    </svg>
    <span className='pl1'>
      {moment(startdate).format('MMM D, YYYY')} - {moment(enddate).format('MMM D, YYYY')}
    </span>
  </div>
)

const RepFunding = ({ funding, ...props }) => (
  <div className='flex items-center red'>
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
