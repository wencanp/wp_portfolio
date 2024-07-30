import React from 'react';
import { NavigationDots, SideDecoration } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SideDecoration />

        <div className='app__wrapper app__flex'>
            <Component />
            <div className='app__decoration-long'></div>
            <div className='app__decoration-green'></div>
            {/* <div className='copyright'>
                <p className='p-text'>@2024 WENCANPENG</p>
                <p className='p-text'>All rights reserved</p>
            </div> */}
        </div>
        <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;