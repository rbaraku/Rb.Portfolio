import React from 'react';

const NavigationDots = ({ active }) => (
    <div className='app__navigation'>
        {['home', 'about', 'contact', 'work', 'skills'].map((item, index) => (
                <a 
                href={`#${item}`} 
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#f67571'} : { }}
                  />
        ))}
    </div>
  );

export default NavigationDots;