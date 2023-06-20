import React from 'react'
import SocialLinks from '../ui/SocialLinks'
function Footer() {
  return (
    <footer className='flex flex-col items-center gap-4 opacity-70 px-5 py-10'>
        <p className='text-lg text-center'>© 2023 Mahesh Odedara. All Rights Reserved.</p>
        <SocialLinks />
    </footer>
  )
}

export default Footer