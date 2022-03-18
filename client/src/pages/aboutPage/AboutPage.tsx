import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <section className='about-page'>
      <h1 className='about-page__header'>About</h1>
      <p className='about-page__desc'>The app was created on 17.03.2022 at Salt as a hack day project using ExpressJS and React</p>
      <section className="contact">
        <h1 className="contact-mail-title">Contact</h1>
        <div className="social-links">
          <span><a
            className="contact-button"
            href="mailto:nemanja.dunic@appliedtechnology.se">
              <i className="fa-solid fa-envelope fa-3x icon"></i>
              </a> <a className='linkedIn-button' href="https://www.linkedin.com/in/nemanjazdunic/" ><i className="fa-brands fa-linkedin fa-3x icon"></i></a><a className='github-button' href="https://github.com/dunicn" ><i className="fa-brands fa-github fa-3x icon"></i></a></span>
          
        </div>
    </section>
      <p className='about-desc'></p>
    </section>
  )
}

export default AboutPage