import { useState } from 'react'

import './App.css'
import Menu from './components/menu/Menu'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Qualification from './components/Qualification/Qualification'
import Blog from './components/blog/Blog'
import Portfolio from './components/portfolio/Portfolio'

import Testimonialslide from './components/Testimonial slide/Testimonialslide'
import {Ripple} from 'react-preloaders';
function App() {
  

  return (
    <>
      <Ripple/>
     <Menu/>
     <Banner/>
     <About/>
     <Skills/>
     <Qualification/>
     <Service/>
     <Portfolio/>
     <Testimonialslide/>
     <Blog/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
