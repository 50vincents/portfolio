import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import resume from '../images/RESUMELATEST.pdf';

function Home() {
  return (
    <div className='home'>
      <div className='home-left'>
        <h1 className='home-intro'>Hey,</h1>
        <h1 className='home-intro'>I'm Vincent,</h1>
        <h1 className='home-intro'>
          <Typewriter
            options={{
              strings: ['a developer.', 'a creator.', 'a learner.', 'a musician.', 'a friend.'],
              autoStart: true,
              loop: true,
              deleteSpeed: 45,
              delay: 45
            }} 
          />
        </h1>
        
      </div>

      <div className='home-right'>
        <Link className='home-nav' to='/about'>
          <h1 className='home-option'>about</h1>
        </Link>
        <Link className='home-nav' to='/work'>
          <h1 className='home-option'>work</h1>
        </Link>
        <Link className='home-nav' to='/contact'>
          <h1 className='home-option'>contact</h1>
        </Link>
        <a href={resume} target='__blank' className='home-option home-resume'>resume</a>
      </div>

    </div>
  )
}

export default Home
