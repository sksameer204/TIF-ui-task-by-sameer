import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-info'>
        <h1>Discover the <span>Best</span> Food and Drinks</h1>
        <p>Naturally made Healthcare Products for the <br />better care & support of your body.</p>
        <button>Explore Now!</button>
      </div>
      <div className='hero-image'>
        <img src={require("../assets/hero-img.png")} alt="Hero Img" />
        <img src={require("../assets/hero-vector.png")} alt="Hero Vector" className='vector-img' />
      </div>
    </section>
  )
}

export default HeroSection