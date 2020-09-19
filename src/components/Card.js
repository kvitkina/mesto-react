import React from 'react';

function Card ({card}) {
    console.log(card)
  return (
    <li key={card.id} className="element">
      <img style={{ backgroundImage: `url(${card.link})` }} className="element__image" alt='`${card.name}`'/>
      <div className="element__trash"></div>
      <div className="element__info">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button className="element__like"></button>
          <p className="element__like-counter">{card.likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card