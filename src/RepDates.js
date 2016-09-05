import React, { PropTypes } from 'react'
import moment from 'moment'

const RepDates = ({
  startdate,
  enddate,
  ...props
}) => (
  <div
    aria-label='Term dates'
    className='flex items-center tooltipped meta'
  >
    <svg width={16} height={16}>
      <use xlinkHref='#clock' />
    </svg>
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
