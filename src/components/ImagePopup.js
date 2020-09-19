import React from 'react';

function ImagePopup () {
  return (
    <section className="popup popup_photo-zoom">
    <div className="popup__container-place">
      <img src="#" className="popup__image" alt=""/>
      <p className="popup__place"></p>
      <button className="popup__close"></button>
    </div>
  </section>
  )
}

export default ImagePopup