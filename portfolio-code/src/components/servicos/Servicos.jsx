import React from 'react'
import "./servicos.css"

const data = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Cria interfaces visuais atraentes e funcionais para sites e aplicativos, melhorando a experiência do usuário, fortalecendo a marca, aumentando a acessibilidade, otimizando para mecanismos de busca.",
  },
  {
    id: 2,
    title: "Desenvolvimento Web",
    description:
      "Oferece interatividade, custo acessível, marketing digital e escalabilidade. Possibilita a criação de sites e aplicativos acessíveis em diversos dispositivos, impulsionando a presença online e visibilidade.",
  },
  {
    id: 3,
    title: "UX Design",
    description:
      "Melhor usabilidade, maior satisfação do cliente, redução de custos, maior retenção de usuários, diferenciação no mercado, acessibilidade, aumento da eficiência, análise de dados e melhorias contínuas no produto."
  },
];

const Servicos = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Serviços</h2>

      <div className="services__container grid">
        {data.map(({ id, title, description }) => {
          return (
            <div className="services__card" key={id}>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Servicos