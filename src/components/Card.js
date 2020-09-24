import React from 'react';

function Card ({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
      } 

  return (
    <li className="element">
      <img 
        style={{ backgroundImage: `url(${card.link})` }} 
        className="element__image"
        alt=""
        onClick={handleClick}
      />
      <div className="element__trash"></div>
      <div className="element__info">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button className="element__like"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card