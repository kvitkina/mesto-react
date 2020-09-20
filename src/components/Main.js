import React from 'react';
import api from './../utils/Api'
import Card from './Card'

function Main (props) {
  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

React.useEffect (() => {
  api.getUserInfo()
  .then(res => {
    setUserName(res.name)
    setUserDescription(res.about)
    setUserAvatar(res.avatar)
  })
})

React.useEffect(() => {
  api.getInitialCards()
  .then(res => {
    setCards(res)
  })
},[])

  return (
    <main className="content">
    <section className="profile">
      <button className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></button>
      <div className="profile__info">
        <h1 className="profile__name">{userName}</h1>
        <button className="profile__edit-button" onClick={props.onEditProfile}></button>
      <p className="profile__job">{userDescription}</p>
      </div>
      <button className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>

    <div className="elements">
      <ul className="elements__list">
       {cards.map(card =>
            <Card
            card={card}
            onCardClick = {props.onCardClick}/>
          )} 
      </ul>
    </div>

    
{/* <section className="popup popup_delete">
<div className="popup__container">
  <button className="popup__close"></button>
  <h2 className="popup__title popup__title_theme_delete">Вы уверенны?</h2>
  <form className="popup__form-container" name="popup-delete">
    <input type="submit" className="popup__button popup__button_theme_delete" value="Да"/>
  </form>
</div>
</section> */}

  </main>
  )
}

export default Main

   