import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <HashRouter >
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutme />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </div>
    </HashRouter>
  )
}

export default App
