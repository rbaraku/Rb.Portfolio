import React, { useState, useEffect, useRef} from 'react'
import { motion } from 'framer-motion';
import { imgs } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <>
          <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__about-info'
      >
      <h2 className='about-head-text'>
        A Little Bit
        <span> About </span> Me
      </h2>

    <div className='about-header'>
    {abouts.map((about) =>  (
      
      <>
      <div className='about-img'>
          <div className={`img img1 ${hoveredIndex === 0 ? 'img-hovered' : ''}`}> 
          <img className='im1' 
          src={urlFor(about.imgUrl)} alt={about.title} 
          onMouseEnter={() => handleMouseEnter(0)} 
          onMouseLeave= {handleMouseLeave}/> 
            </div>

          <div className={`img img2 ${hoveredIndex === 1 ? 'img-hovered' : ''}`}>
          <img className= 'im2' 
          src={urlFor(about.imgUrl2)} alt={about.title} 
          onMouseEnter={() => handleMouseEnter(1)} 
          onMouseLeave= {handleMouseLeave}/> 
            </div>

          <div className={`img img3 ${hoveredIndex === 2 ? 'img-hovered' : ''}`}> 
          <img className= 'im3' 
          src={urlFor(about.imgUrl3)} 
          alt={about.title} 
          onMouseEnter={() => handleMouseEnter(2)} 
          onMouseLeave= {handleMouseLeave}/>
           </div>
        </div>

        <div className='app__about-text'>
        <div className={`paragraph-container ${hoveredIndex === 0 ? 'paragraph-hovered' : ''}`}>
        <p>{about.description}</p>
        </div>

        <div className={`paragraph-container ${hoveredIndex === 1 ? 'paragraph-hovered' : ''}`}>
        <p>{about.description2}</p>
        </div>

        <div className={`paragraph-container ${hoveredIndex === 2 ? 'paragraph-hovered' : ''}`}>
        <p>{about.description3}</p>
        </div>
      </div></>
      ))}
      </div>   
      </motion.div>
    </>
  );
};



export default AppWrap (MotionWrap(About, 'app__about'), 'about', "app__whitebg")
