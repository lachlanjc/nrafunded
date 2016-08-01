
import React from 'react'

const RepSocial = ({
  twitterid,
  website,
  contact,
  phone,
  ...props
}) => (
  <div className='flex flex-wrap items-center mt2 lh0' {...props}>
    {phone && <RepSocialPhone phone={phone} />}
    {twitterid && <RepSocialTwitter twitterid={twitterid} />}
    {contact && <RepSocialContact contact={contact} />}
    {website && <RepSocialWebsite website={website} />}
  </div>
)

const RepSocialItem = ({ link, title, icon, ...props }) => (
  <a
    href={link}
    target='_blank'
    aria-label={title}
    className='tooltipped social-link pr3'
    >
    <svg width={24} height={24}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  </a>
)

const RepSocialTwitter = ({ twitterid }) => (
  <RepSocialItem
    link={`https://twitter.com/${twitterid}`}
    title='Twitter'
    icon='twitter'
  />
)

// const RepSocialFacebook = ({ facebookid }) => (
//   <RepSocialItem
//     link={`https://facebook.com/${facebookid}`}
//     title='Facebook'
//     icon='facebook'
//     fill='#3b5998'
//   />
// )

const RepSocialContact = ({ contact }) => (
  <RepSocialItem
    link={contact}
    title='Contact'
    icon='compose'
  />
)

// const RepSocialAddress = ({ contact }) => {
//   return (
//     <RepSocialItem
//       link={address}
//       title='Address'
//       icon='pin'
//       fill='#f70'
//     />
//   )
// }

const RepSocialWebsite = ({ website }) => (
  <RepSocialItem
    link={website}
    title='Website'
    icon='link'
  />
)

const RepSocialPhone = ({ phone }) => (
  <RepSocialItem
    link={`tel:${phone}`}
    title={`Phone number: ${phone}`}
    icon='phone'
  />
)

export default RepSocial
