import React from 'react';

import './CircleDecoration.scss';

const CircleDecoration = ({mainColor, backgroundColor, transform, left, bottom}) => {
    const styleLarger = {
        border: `3px solid ${mainColor}`,
    }

    const styleSmaller = {
        border: `2px solid ${mainColor}`,
    }

    const styleSolid = {
        border: `2px solid ${mainColor}`,
        backgroundColor: `${mainColor}`,
    }

    const styleEmpty = {
        border: `2px solid ${mainColor}`,
        backgroundColor: `${backgroundColor}`,
    }

  return (
    <div 
        className='app__circles' 
        style={{transform: transform, left: left, bottom: bottom}}
    >
        <div 
            className='app__circles-larger'
            style={styleLarger}
        ></div>

        <div 
            className='solid-circle outer1'
            style={styleSolid}
        ></div>
        <div 
            className='solid-circle outer2'
            style={styleSolid}
        ></div>

        <div 
            className='app__circles-smaller'
            style={styleSmaller}
        ></div>

        <div 
            className='solid-circle inner'
            style={styleEmpty}
        ></div>
    </div>
  )
}

export default CircleDecoration;