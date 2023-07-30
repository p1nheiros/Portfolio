import React from 'react'

const Card = (props) => {
  return (
    <div className="line__item">
        <i className={props.icon}></i>
        <h3 className="line__title">{props.title}</h3>
        <p className="line__desc">{props.desc}</p>
    </div>
  )
}

export default Card