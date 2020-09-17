import React from 'react'
import '../styles/About.css';
import prof from '../PROF.jpg'

function About() {
  return (
    <div className='about'>
      <div className='about-left'>
        <p className='about-info'>
          Born and raised in San Francisco, I've spent the last four years in sunny Santa Cruz pursuing a Computer Science degree.
          Career wise, my interests lie in front end development and cloud computing, and I'm always looking for new opportunities 
          to learn and grow!
        </p>
        <br></br>
        <p className='about-info'>
          Growing up, I've always had an affinity for music, design, and creating. I loved expressing my originality in
          writing my own story books, designing websites, building LEGOs (without the instructions), and singing (horrendously at first).
          My goal in the industry is to combine my lifelong passion for the arts with my engineering background to create elegant, efficient 
          technological solutions. Moreover, I hope to utilize my skills to combat global issues in public health.
        </p>
        <br></br>
        <p className='about-info'>
          When I'm not coding away to soulful R&B, you can find me producing music, religiously checking NBA box scores, 
          sharing my workout routines (with non-interested people), or reading.
        </p>
      </div>

      <div className='about-right'>
        <img src={prof} />
      </div>
    </div>
  )
}

export default About
