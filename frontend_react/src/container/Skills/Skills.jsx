import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import 'react-tooltip/dist/react-tooltip.css';
import './Skills.scss';
import { SectionTitle, CircleDecoration } from '../../components';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(expQuery)
      .then((data) => {
        setExperience(data);
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <div className='app__skills app__flex'>
      <CircleDecoration 
        mainColor={'#ebeae5'}
        backgroundColor={'white'}
        transform='rotate(200deg) scale(0.8)'
        bottom='-15rem'
        left='25rem'
      />

      <SectionTitle sectionTitle='Skill Set' />

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience?.map((experience) => (
            <motion.div 
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills', 
  'app__primarybg'
);