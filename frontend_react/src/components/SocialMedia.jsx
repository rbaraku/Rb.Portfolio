import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href='https://twitter.com/Rronb10' target='_blank'><BsTwitter></BsTwitter></a> 
        </div>
        <div>
        <a href='https://www.instagram.com/rronb10/' target='_blank'><BsInstagram></BsInstagram></a>
        </div>
        <div>
        <a href='https://facebook.com/' target='_blank'><FaFacebookF></FaFacebookF></a>
        </div>
    </div>
  )
}

export default SocialMedia