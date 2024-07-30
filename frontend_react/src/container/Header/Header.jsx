import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesOptions from './particlesOptions';

import { CircleDecoration } from '../../components';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const [init, setInit] = useState(false);
  const [editTime, setEditTime] = useState([]);

  useEffect(() => {
    const timeQuery = '*[_type == "editTime"]';
    client.fetch(timeQuery)
      .then((data) => {
        setEditTime(data);
      })
      // console.log(editTime[0]);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  },  []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => (particlesOptions), []);

  return (
    <div className='app__header app__flex'>
      <CircleDecoration 
        mainColor='white'
        backgroundColor='#ebeae5'
        transform='rotate(-40deg) scale(0.8)'
        bottom='30rem'
        left='30rem'
      />      

      <Particles 
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
      />

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className='app__header-title'
      >
        <h1>WELCOME</h1>
        <h2>DIGITAL DOSSIER OF</h2>
        <p className='app__barcode'>ENCRYPTED FILE OWNER: WENCAN PENG</p>
        <p className='app__header-name'>Wencan PENG</p>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 2 }}
        className='app__header-tag'
      >
        <h2>file number: B-211</h2>
        <h2>last edited: JUL24</h2>
        <h2>tags: <span>DEVELOPER</span></h2>
        <div className='headertag-frame'></div>
        <div className='headertag-rectangle'></div>
        <div className='headertag-line'></div>
      </motion.div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Header, 'app__header'), 
  'home', 
  'app__primarybg'
);