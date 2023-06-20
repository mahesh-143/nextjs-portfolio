import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa/'

const SocialLinks = () => {
  return (
    <div className='flex gap-4'>
        <FaGithub size={24}/>
        <FaTwitter size={24}/>
        <FaLinkedin size={24}/>
        <FaInstagram size={24}/>
    </div>
  )
}

export default SocialLinks