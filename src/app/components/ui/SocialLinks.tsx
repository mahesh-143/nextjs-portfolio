import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa/'

const SocialLinks = () => {
  return (
    <div className='flex gap-4'>
      <a href='https://github.com/mahesh-143'><FaGithub size={24}/></a>
      <a href='https://twitter.com/ichmahesh'><FaTwitter size={24}/></a>
      <a href='https://www.linkedin.com/in/mahesh-odedara-392257239/'><FaLinkedin size={24}/></a>
    </div>
  )
}

export default SocialLinks