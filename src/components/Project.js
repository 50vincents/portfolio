import React from 'react'
import '../styles/Project.css'
// on hover display name
// click pop up box w desc and link
// maybe demo

function Project({source}) {
  return (
    <div className='project'>     
      <div className='project-container'>
        <img className='project-image' src={source}/>
      </div>
    </div>
  )
}

export default Project
