import React, { PropTypes } from 'react'
import moment from 'moment'

import Icon from './Icon'

const RepDates = ({
  startdate,
  enddate,
  ...props
}) => (
  <div
    aria-label='Term dates'
    className='flex items-center tooltipped meta'
  >
    <Icon name='clock' />
    <span className='pl1'>
      {moment(startdate).format('MMM D, YYYY')} - {moment(enddate).format('MMM D, YYYY')}
    </span>
  </div>
)

RepDates.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
}

export default RepDates
