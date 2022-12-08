import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar--ul'>
        <li className='navbar--link'><a href="#home">Home</a></li>
        <li className='navbar--link'><a href="#about">About me</a></li>
        <li className='navbar--link'><a href="#skills">Skills</a></li>
        <li className='navbar--link'><a href="#portfolio">Portfolio</a></li>
        <li className='navbar--link'><a href="#contact">Contact me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;