import React from 'react';

const SideDecoration = () => {
    return (
      <div className='app__decoration'>
        {['bold', 'dash', 'dash', 'dash', 'dash', 'dash', 'dash', 'dash', 'bold'].map((item, index) => (
          <div 
            className={`app__decoration-${item}`}
            key={index}
          />
        ))}
      </div>
      
    );
  }
  
  export default SideDecoration;