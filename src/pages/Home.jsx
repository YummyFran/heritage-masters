import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Introduction from '../components/Introduction'
import Profiles from '../components/Profiles'
import Developers from '../components/Developers'

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Introduction />
      <Profiles />
      <Developers />
    </>
  )
}

export default Home