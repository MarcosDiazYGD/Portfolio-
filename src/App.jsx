import './App.css'
// import ScriptTag from 'react-script-tag'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div className="App">
        
      {/* <div id="particles-js"></div> */}
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
