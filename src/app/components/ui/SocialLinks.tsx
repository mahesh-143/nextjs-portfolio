import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa/'

const SocialLinks = () => {
  return (
    <div className='flex gap-4'>
        <FaGithub size={32}/>
        <FaTwitter size={32}/>
        <FaLinkedin size={32}/>
        <FaInstagram size={32}/>
    </div>
  )
}

export default SocialLinks