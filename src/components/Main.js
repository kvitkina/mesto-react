import React from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDislike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          onClick={onEditAvatar}
        />
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} />
      </section>

      <div className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
              onCardDislike={onCardDislike}
            />
          ))}
        </ul>
      </div>

      <section className="popup popup_delete">
        <div className="popup__container">
          <button className="popup__close" />
          <h2 className="popup__title popup__title_theme_delete">Вы уверенны?</h2>
          <form className="popup__form-container" name="popup-delete">
            <input
              type="submit"
              className="popup__button popup__button_theme_delete"
              defaultValue="Да"
            />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Main
