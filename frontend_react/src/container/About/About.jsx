import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { SectionTitle, CircleDecoration } from '../../components';
import './About.scss';
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data))
  }, []);

  return (
    <div className='app__about app__flex'>
      <CircleDecoration 
        mainColor={'#ebeae5'}
        backgroundColor={'white'}
        transform='rotate(200deg) scale(0.8)'
        bottom='-15rem'
        left='30rem'
      />

      <SectionTitle sectionTitle='Personal Concept' />

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 
            }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <div className='border-hover border1'></div>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h3 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h3>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            <div className='border-hover border2'></div>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about', 
  'app__whitebg'
);