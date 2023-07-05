import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './About.scss';


import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
          <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__about-info'
      >
      <h2 className='head-text'>
        A Little Bit
        <span> About Me</span>
      </h2>

    <div className='about-header'>
    {abouts.map((about) => (
      <>
      <div className='about-img'>
          <div className='img img1'> 
          <img src={urlFor(about.imgUrl)} alt={about.title} />
            </div>
          <div className='img img2'>
          <img src={urlFor(about.imgUrl2)} alt={about.title} /> 
            </div>
          <div className='img img3'> 
          <img src={urlFor(about.imgUrl3)} alt={about.title} />
           </div>
        </div>
        <div className='app__about-text'>
        <p>{about.description}</p>
      </div></>
      ))}
      </div>   
      </motion.div>
    </>
  );
};



export default AppWrap(About, 'about')