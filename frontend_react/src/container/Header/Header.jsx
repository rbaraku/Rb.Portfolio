import React from 'react'
import { color, motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs';
import { images } from '../../constants';
import { Button } from 'react-bootstrap';
import { MdContactPage } from 'react-icons/md'
import { RiCodeSSlashFill } from 'react-icons/ri';
import { RiCodeSLine } from 'react-icons/ri';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { RiCodeSFill } from 'react-icons/ri';
import { RiCodeLine } from 'react-icons/ri';
import { RiCodeFill } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin }from 'react-icons/sl';
import { FaLinkedinIn } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppWrap } from '../../wrapper';

import './Header.scss';





const Header = () => {
    const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <><div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>
                Hello, I am
              </p>
              <span className='block'></span>
              <h1 className='head-text'>
                Rron
              </h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>
              Software Developer
            </p>
          </div>
        </div>

        <div className='app__header-buttons'>
          <div className='header-cv app__flex'>
            <Button href= "https://rronsresume.netlify.app/" target='_blank' className='down-button'>
              <i className='download'>
              Résumé
              </i>
              <BsDownload></BsDownload>
            </Button>
          </div>

          <div className='contact-me app__flex'>
            <Button  className='contact-button' onClick={handleScrollToContact}>
              <i className='contact'>
                Contact
              </i>
              <MdContactPage></MdContactPage>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ marginLeft: -50 }}
        animate={{ x: 100 }}
        transition={{  duration: 0.5 }}
        whileInView={{ x: [300, 100], opacity: [0, 1] }}
        className='app__header-img'
      >
        <img src={images.rbnobg} alt='me2_bg' />
      </motion.div>


<motion.div className='app__header-socials1'
        animate={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3 }}>


  <div className='starting-icon app__flex'>
              <RiCodeSLine className='startSize'></RiCodeSLine>
            </div>

            <div className='linked-in app__flex'>
              <a href='https://www.linkedin.com/in/rron-baraku-40893a276/' target='_blank' className='L-link'><FaLinkedinIn className='linkedSize'></FaLinkedinIn>
              </a>
            </div>

            <div className='github app__flex'>
              <a href='https://github.com/rbaraku' target='_blank' className='G-link'><BsGithub className='gitSize'></BsGithub>
              </a>
            </div>

            <div className='ending-icon app__flex'>
              <RiCodeSSlashLine className='endSize'></RiCodeSSlashLine>
            </div>

            </motion.div>

    </div>

    
    </>
  )
}

export default AppWrap(Header, 'home');