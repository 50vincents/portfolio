import React from 'react'
import Project from './Project';
import spotify from '../images/SPOTIFY.png'
import amazon from '../images/AMAZON.png'
import ig from '../images/IG.png'
import mob from '../images/MOB.png'
import '../styles/Work.css'

function Work() {

  return (
    <div className='work'>
      <div className='work-project'>
        <Project source={spotify}/>
        <Project source={amazon}/>
        <Project source={ig}/>
        <Project source={mob} />
      </div>
     
    </div>
  )
}

export default Work
