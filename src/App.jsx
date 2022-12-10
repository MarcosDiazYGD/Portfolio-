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
      <Helmet>
        <script src="./src//libraries/particles.min.js"></script>
        <script src="./src/libraries/particlesConfig.js"></script>
      </Helmet>
      <div id="particles-js"></div>
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
