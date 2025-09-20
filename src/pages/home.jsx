import React from 'react'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/footer'
import Herocomponent from '../components/ui/home-components/Hero-component'
import About from '../components/ui/home-components/About'
import Interests from '../components/ui/home-components/Interests'
import Education from '../components/ui/home-components/Education'
import Projects from '../components/ui/home-components/Projects'
import Contact from './ContactPage'

function Home() {
  return (
    <>
      <Herocomponent/> 
      <About/>
      <Education/>
      <Projects/>
      <Interests/>
      <Contact/>
    </>
    )
}
  
export default Home
