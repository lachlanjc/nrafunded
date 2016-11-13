
import React, { PropTypes } from 'react'
import _ from 'lodash'

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

Stat.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired,
  label: PropTypes.string,
  unit: PropTypes.oneOf(['%', '$']) || PropTypes.string
}

export default Stat
