import React from 'react';

function PopupWithForm (props) {
    console.log(props)
  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? `popup_opened` : ''} `}>
    <div className="popup__container">
      <button className="popup__close" onClick={props.onClose}></button>
      <form className="popup__form-container"  name={props.name} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__form">
          {props.children}
        <input type="submit" className="popup__button" value={props.submit} onClick={props.onClose}/>
        </fieldset>
      </form>
    </div>
  </section>
  )
}

export default PopupWithForm