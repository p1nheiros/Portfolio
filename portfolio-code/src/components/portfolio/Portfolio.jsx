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
    <section className="work container section" id='work'>
      <h2 className="section__title">Projetos Recentes</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() =>  setItems(Menu)}>Todos</span>
        <span className="work__item" onClick={() => filterItem 
          ("Projetos")}>Projetos</span>
        <span className="work__item" onClick={() => filterItem 
          ("Hackathons")}>Hackathons</span>
        <span className="work__item" onClick={() => filterItem 
          ("Práticas")}>Práticas</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio