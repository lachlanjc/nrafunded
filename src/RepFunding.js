
import React, { PropTypes } from 'react'
import commaNumber from 'comma-number'

import Icon from './Icon'

const RepFunding = ({ funding, ...props }) => (
  <div className='flex items-center red'>
    <Icon name='medal' />
    <span className='pl1'>
      Funding: {' '}
      <strong style={{ fontWeight: 600 }}>
        ${commaNumber(funding)}
      </strong>
    </span>
  </div>
)

RepFunding.propTypes = {
  funding: PropTypes.number.isRequired
}

export default RepFunding
