import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/homePage/Home'
import About from './pages/about/About'
import Experience from './pages/experience/Experience'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-container">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>

        <div id="experience">
          <Experience />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
