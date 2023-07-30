import React from 'react'
import "./skills.css"
import Data from './Data';
import Card from "./Card";

const Skills = () => {
  return (
    <section className="resume container section" id='skills'>
      <h2 className="section__title">Habilidades</h2>

      <div className="skills__container grid">

        <div className="line grid">
          <h3 className="skills__title">Dev Front-End</h3>
          {Data.map((val, id) => {
            if (val.category === "front") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

        <div className="line grid">
          <h3 className="skills__title">Dev Back-End</h3>
          {Data.map((val, id) => {
            if (val.category === "back") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;