import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Design",
    description:
      "Cria interfaces visuais atraentes e funcionais para sites e aplicativos, melhorando a experiência do usuário, fortalecendo a marca, aumentando a acessibilidade, otimizando para mecanismos de busca.",
  },
  {
    id: 2,
    image: Image2,
    title: "Desenvolvimento Web",
    description:
      "Oferece benefícios como acesso global, custo acessível, interatividade, marketing digital e escalabilidade. Possibilita a criação de sites e aplicativos acessíveis em diversos dispositivos, impulsionando a presença online e visibilidade.",
  },
  {
    id: 3,
    image: Image3,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Serviços</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services