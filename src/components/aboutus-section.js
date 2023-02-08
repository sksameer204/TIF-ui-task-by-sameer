import React from 'react'

const AboutusSection = () => {
  return (
    <section className="aboutus-section">
      <div className="about-container">
        <div className='about-image'>
          <img src={require("../assets/about-us.png")} alt="Hero Img" />
        </div>
        <div className='about-info'>
          <h2>About Us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className="button">Read More</button>
        </div>
      </div>
    </section>)
}

export default AboutusSection