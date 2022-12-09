import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import TypewriterComponent from 'typewriter-effect'

function App() {

  return (
      <div className="App">
        <Navbar />
        <Home />
        <Aboutme />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
  )
}

export default App
