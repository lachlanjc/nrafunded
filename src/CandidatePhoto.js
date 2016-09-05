import React, { PropTypes } from 'react'

const CandidatePhoto = ({
  src,
  size,
  href
}) => (
  <a
    href={href}
    target='_blank'
    className='md-show mr2'
    style={{
      flexShrink: 0
    }}
  >
    <img
      src={src}
      style={{
        borderRadius: '50%',
        height: size,
        width: size
      }}
    />
  </a>
)

CandidatePhoto.defaultProps = {
  size: 112
}

CandidatePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default CandidatePhoto
