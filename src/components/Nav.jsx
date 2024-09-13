import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Nav = () => {
  return (
    <div className='nav'>
        <HashLink to="#home" className="identity">
            <div className="logo"></div>
            <div className="name">Heritage Masters</div>
        </HashLink>
        <div className="nav-links">
            <HashLink to="#home" className="nav-link">Home</HashLink>
            <HashLink to="#intro" className="nav-link">About</HashLink>
            <HashLink to="#artist-profiles" className="nav-link">Profiles</HashLink>
            <HashLink to="#developers" className="nav-link">Developers</HashLink>
        </div>
    </div>
  )
}

export default Nav