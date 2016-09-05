import React, { PropTypes } from 'react'
import commaNumber from 'comma-number'

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

RepFunding.propTypes = {
  funding: PropTypes.number.isRequired
}

export default RepFunding
