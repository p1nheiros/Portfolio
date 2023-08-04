import React from 'react';
import "./qualificacao.css";
import Data from './Data';
import Card from "./Card";

const Qualificacao = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">Qualificação</h2>

      <div className="resume__container grid">

        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
            return null;
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              const showDesc2AndDesc3 = val.id === 12;

              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  desc2={showDesc2AndDesc3 ? val.desc2 : undefined}
                  desc3={showDesc2AndDesc3 ? val.desc3 : undefined}
                />
              )
            }
            return null;
          })}
        </div>

      </div>
    </section>
  )
}

export default Qualificacao;
