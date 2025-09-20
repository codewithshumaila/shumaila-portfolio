import React from 'react'
import Home from './pages/home'
import About from './pages/AboutPage'
import Projects from './components/ui/home-components/Projects'
import Education from './components/ui/home-components/Education'
import Contact from './pages/ContactPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/shared/navbar'
import Footer from './components/shared/footer'
import AboutPage from './pages/AboutPage'
import EducationPage from './pages/EducationPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
    <Routes>   
      <Route path="/" element={<Home/>} /> 
      <Route path="/About" element={<AboutPage/>}/> 
       <Route path="/Education" element={<EducationPage/>}/> 
      <Route path="/Projects" element={<ProjectsPage/>}/> 
      <Route path="/Contact" element={<ContactPage/>}/>
       <Route path="*" element={<h1 className="text-center text-4xl mt-20">404! Page Not Found</h1>} />
    </Routes>
    <Footer/>
     </div> 
    </BrowserRouter>
  )
}

export default App
 