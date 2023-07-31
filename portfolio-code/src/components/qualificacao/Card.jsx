import React from 'react';

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <li className="timeline__text">{props.desc}</li>
      {props.desc2 && <li className="timeline__text">{props.desc2}</li>}
      {props.desc3 && <li className="timeline__text">{props.desc3}</li>}
    </div>
  );
};

export default Card;