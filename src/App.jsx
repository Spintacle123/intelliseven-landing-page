import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Offer from './Components/Offer'
import Cards from './Components/Cards'
import IntelliText from './Components/IntelliText'
import About from './Components/About'
import Projects from './Components/Projects'





function App() {

  return (
    <div className=''>
    <Header/>
    <Hero/>
    <Offer/>
    <Cards/>
    <IntelliText/>
    <About/>
    <Projects/>
    </div>
  )
}

export default App
