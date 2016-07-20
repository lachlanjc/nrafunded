
import React from 'react'
import { Base } from 'rebass'

const RepSocial = ({
  twitterid,
  phone,
  website,
  contact,
  address,
  ...props
}) => (
  <div className='flex flex-wrap items-center mt2' {...props}>
    {twitterid && <RepSocialTwitter twitterid={twitterid} />}
    {contact && <RepSocialContact contact={contact} />}
    {phone && <RepSocialPhone phone={phone} />}
    {website && <RepSocialWebsite website={website} />}
  </div>
)

const RepSocialItem = ({ link, title, icon, ...props }) => (
  <Base
    is='a'
    href={link}
    target='_blank'
    aria-label={title}
    className='tooltipped social-link'
    pr={2}>
    <svg width={24} height={24}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  </Base>
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
  <div
    aria-label={`Phone number: ${phone}`}
    className='tooltipped pr2'>
    <svg width={24} height={24}>
      <use xlinkHref='#chat' />
    </svg>
  </div>
)

export default RepSocial
