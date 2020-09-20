import React from 'react';

function ImagePopup (props) {
  return (
    <section className={`popup popup_${props.name} ${props.card && 'popup_opened'}`}>
    <div className="popup__container-place">
      <img src={props.card ? props.card.link : ''} className="popup__image" alt={props.card ? props.card.name : ''}/>
      <p className="popup__place">{props.card ? props.card.name : ''}</p>
      <button className="popup__close" onClick={props.onClose}></button>
    </div>
  </section>
  )
}

export default ImagePopup