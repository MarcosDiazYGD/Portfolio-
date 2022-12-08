import React from 'react';
import logo from '../assets/logo/passion-for-programming.png'
import blackJS from '../assets/logo/black-js.png'
import svgs from '../assets/logo/svg/svg'
import svg from '../assets/logo/svg/svg';
const Home = () => {
  return (
    <div className='Home'>

      <div className='container-welcome-text'>
        <h1>
          Hola soy <span className='important'>Marcos Diaz</span> <br />
          <span className="important auto-text">Front-end Developer</span>
        </h1>

        <div className='description-skills'>
          <img className='icon skill' src={svgs.html} />
          <img className='icon skill' src={svgs.css} />
          <img className='icon skill' src={svg.js} />
          <img className='icon skill' src={svgs.react} />
          <img className='icon skill' src={svgs.git} />
          <img className='icon skill' src={svg.sass} />
        </div>
      </div>

      <div>
        <div className='container-logo'>
          <img className='logo' src={logo} />
          <a href={logo} download>
            <button className='button download-cv ' >descargar cv</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;