import React from 'react';

import './Section.scss';
import '../../styles.scss';

export const Section = () => {
  return (
    <div className='section__content'>

      <div className='section_egg'>

        <div className='section'>
          <h2 className='title'>Transform your brand</h2>
          <p className='text'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <div className='div_link'>
            <a className='link'>Learn more</a>
          </div>
        </div>

        <div className='egg'>
        </div>

      </div>

      <div className='section_glass'>

        <div className='section'>
          <h2 className='title'>Stand out to the right audience</h2>
          <p className='text'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <div className='div_link'>
            <a className='link'>Learn more</a>
          </div>
        </div>

        <div className='glass'>
        </div>

      </div>

      <div className='section_fruit'>

        <div className='cherry'>
          <h2 className='title'>Graphic Design</h2>
          <p className='text'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>

        <div className='orange'>
          <h2 className='title'>Photography</h2>
          <p className='text'> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>

      </div>

    </div>
  )
}