import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/homePage/Home'
import About from './pages/about/About'
import Experience from './pages/experience/Experience'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);

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
