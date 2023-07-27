import React from 'react'
import "./home.css"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const home = () => {
  return (
    <selection className="home container" id="home">
      <div className="intro">
        <img src="../../assets/avatar-1.svg" alt="avatar" className="home__img" />
        <h1 className="home__name">Lucas Pinheiro</h1>
        <span className="home__education">Desenvolvedor Front-End e React</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Contrate-Me</a>

        <ScrollDown />
      </div>
    </selection>
  )
}

export default home