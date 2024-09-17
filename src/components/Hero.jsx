import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <div className="heading">
            <h1 className="title">Guardians of Heritage</h1>
            <h2 className="tagline">Honoring the GAMABA and National Artists of the Philippines</h2>
        </div>
        <HashLink to="#artist-profiles" className="cta">Explore Our Cultural Treasures</HashLink>
    </div>
  )
}

export default Hero