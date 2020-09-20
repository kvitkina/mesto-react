import React from 'react';

function Card (props) {
    function handleClick() {
        props.onCardClick(props.card);
      } 

  return (
    <li key={props.card.id} className="element">
      <img style={{ backgroundImage: `url(${props.card.link})` }} className="element__image" onClick={handleClick}/>
      <div className="element__trash"></div>
      <div className="element__info">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-container">
          <button className="element__like"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card