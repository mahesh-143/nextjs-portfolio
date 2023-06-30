import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa/'

const SocialLinks = () => {
  return (
    <div className='flex gap-4'>
      <a aria-label='Github' href='https://github.com/mahesh-143'><FaGithub size={24}/></a>
      <a aria-label='Twitter' href='https://twitter.com/ichmahesh'><FaTwitter size={24}/></a>
      <a aria-label='Linkedin' href='https://www.linkedin.com/in/mahesh-odedara-392257239/'><FaLinkedin size={24}/></a>
    </div>
  )
}

export default SocialLinks