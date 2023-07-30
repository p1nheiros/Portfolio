import React from 'react';
import "./sobre.css";
import Image from "../../assets/foto-avatar-1.svg";
import AboutBox from './AboutBox';
import CV_Lucas_Pinheiro from '../../assets/CV_Lucas_Pinheiro.pdf';

const Sobre = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre Mim</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Sou Engenheiro de Software, desenvolvedor Front-End e React, atualmente apriomoriando para FullStack, realizo projetos como websites e softwares tendo clientes como ONGs, freelances, prefeituras e estabelecimentos.
            </p>
            <a href={CV_Lucas_Pinheiro} className="btn" download>Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Front-End</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">React</h3>
                <span className="skills__number">72%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">UX Design</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage programming"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default Sobre