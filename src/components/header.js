import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <img src={require("../assets/logo.png")} alt="Logo" />
        <button className='button header-cta-btn'>Get In Touch</button>
      </nav>
    </header>
  )
}

export default Header