import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updateItems);
  }

  return (
    <section className="work container section" id='portfolio'>
      <h2 className="section__title">Portfólio</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Todos</span>
        <span className="work__item" onClick={() => filterItem
          ("Projetos")}>Projetos</span>
        <span className="work__item" onClick={() => filterItem
          ("Práticas")}>Práticas</span>
        <span className="work__item" onClick={() => filterItem
          ("Vídeos")}>Vídeos</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, linkGit } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>

              <a href={link} target='_blank' rel="noreferrer" className="work__button">
                <i className="uil uil-link-h work__button-icon"></i>
              </a>

              <a href={linkGit} target='_blank' rel="noreferrer" className='work__button__git'>
                <i className="uil-github-alt work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio