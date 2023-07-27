import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre Mim</h2>

      <div className="about__container grid">
        <img src="{Image}" alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Sou desenvolvedor de Front-End e React, atualmente apriomoriando para FullStack, realizando projetos como websites e softwares tendo clientes como Prefeituras, ONGs, Freelances e Estabelecimentos em geral.
            </p>
            <a href="" className="btn">Dowload CV</a>
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
                <h3 className="skills_name">UI/UX Design</h3>
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

export default About