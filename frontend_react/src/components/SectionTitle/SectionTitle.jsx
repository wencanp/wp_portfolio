import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({sectionTitle}) => {
  return (
    <div className='app__section-title'>
        <h2>{sectionTitle}</h2>
        <div className='section-title-line'></div>
        <div className='section-title-rectangle'></div>
        <p className='app__barcode'>{sectionTitle}</p>
    </div>
  )
}

export default SectionTitle;