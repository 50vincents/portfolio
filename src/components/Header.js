import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header({head}) {
  return (
    <div className='header'>

      <div className='header-left'>
        <Link className='header-nav' to='/'>
          <div className='header-options'>
            <h2>home</h2>
          </div>
        </Link> 
      </div>

      <div className='header-right'>
        <Link className='header-nav' to='/about'>
          <div className='header-options'>
            <h2>about</h2>
          </div>
        </Link>
  
        <Link className='header-nav' to='/work'>
          <div className='header-options'>
            <h2>work</h2>
          </div>
        </Link>

        <Link className='header-nav' to='/contact'>
          <div className='header-options'>
            <h2>contact</h2>
          </div>
        </Link>
      </div>
     
    </div>
  )
}

export default Header
