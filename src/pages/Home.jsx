import React from 'react'
import Landing from '../components/Landing'
import Latest from '../components/Latest'
import AboutUS from './AboutUS'
import ContactUs from './ContactUs'
import Ourservices from './Ourservices'
import OurTeam from './OurTeam'

const Home = () => {
  return (
    <div id="home">
      <Landing />
      <AboutUS />
      <Ourservices />
      <Latest />
      <OurTeam />
      <ContactUs />
    </div>
  )
}

export default Home