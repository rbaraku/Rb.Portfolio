import React, {useState} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { easeInOut, motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';
import { Button } from 'react-bootstrap';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

      const [darkMode, setDarkMode] = useState(false);
    
      const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
      };

      if (darkMode) {
        document.querySelector('body').setAttribute('data-theme', 'dark')
      } else {
        document.querySelector('body').setAttribute('data-theme', 'light')
      }
  

    const handleScrollToHome = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo' onClick={handleScrollToHome}>
        <img src={images.fnlogo} alt='logo'/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key ={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='dark-mode'>
        <button className='transparent-button'>
        {darkMode ? (
        <BsSun className='darkSize' onClick={handleDarkModeToggle} transitionDelay/>
      ) : (
        <MdOutlineDarkMode className='darkSize' onClick={handleDarkModeToggle} transitionDelay/>
        )}
      </button>
      </div>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {
          toggle && (
            <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}>
              <HiX onClick={() => setToggle(false)}/>
              <ul>
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key ={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>

            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar




