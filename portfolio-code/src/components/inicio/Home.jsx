import React from 'react'
import "./home.css"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Image from '../../assets/foto-avatar-3.png';

const home = () => {
  return (
    <selection className="home container" id="home">
      <div className="intro">
        <img src={Image} alt="avatar" className="home__img" />
        <h1 className="home__name">Lucas Pinheiro</h1>
        <span className="home__education">Engenheiro de Software e Desenvolvedor</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Contate-Me</a>

        <ScrollDown />
      </div>
    </selection>
  )
}

export default home