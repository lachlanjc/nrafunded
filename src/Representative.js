
import React, { PropTypes } from 'react'

import RepBadge from './RepBadge'
import RepDates from './RepDates'
import RepFunding from './RepFunding'
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
      <RepDates startDate={data.startdate} endDate={data.enddate} />
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

Representative.propTypes = {
  data: PropTypes.object.isRequired
}

export default Representative
