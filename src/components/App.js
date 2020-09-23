import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'


const  App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard)
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="page">
      <div className="page__container">
      <Header />
      <Main 
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name='edit-profile'
        title='Редактировать профиль' 
        submit='Сохранить' 
        isOpen = {isEditProfilePopupOpen} 
        onClose = {closeAllPopups}>
        <div className="popup__input-container">
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="popup__name popup__input" 
            placeholder="Имя" 
            defaultValue="" 
            required 
            minLength="2" 
            maxLength="40"/>
          <span className="popup__input-error" id="name-error"></span>
        </div>
        <div className="popup__input-container">
          <input 
            type="text" 
            id="job" 
            name="about" 
            className="popup__job popup__input" 
            placeholder="Профессия" 
            defaultValue=""
            required 
            minLength="2" 
            maxLength="200"/>
          <span className="popup__input-error" id="job-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm 
        name='add-place' 
        title='Новое место' 
        submit='Создать' 
        isOpen = {isAddPlacePopupOpen} 
        onClose = {closeAllPopups}>
        <div className="popup__input-container">
          <input 
            type="text" 
            id="place" 
            name="name" 
            className="popup__name popup__name_theme_place popup__input" 
            placeholder="Название" 
            required 
            minLength="1" 
            maxLength="30"/>
          <span className="popup__input-error" id="place-error"></span>
        </div>
        <div className="popup__input-container">
          <input 
            type="url" 
            id="link" 
            name="link" 
            className="popup__job popup__job_theme_place popup__input" 
            placeholder="Ссылка на картинку" 
            required/>
          <span className="popup__input-error" id="link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm 
        name='edit-avatar' 
        title='Обновить аватар' 
        submit='Сохранить' 
        isOpen = {isEditAvatarPopupOpen} 
        onClose = {closeAllPopups}>
        <div className="popup__input-container">
          <input 
            type="url" 
            id="link" 
            name="avatar" 
            className="popup__job popup__job_theme_place popup__input" 
            placeholder="Ссылка на аватар" 
            required />
          <span className="popup__input-error" id="link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name='delete' title='Вы уверенны?' submit='Да'/>
      <ImagePopup name = 'photo-zoom' card={selectedCard} onClose = {closeAllPopups}/>
      </div>
    </div>
  )
}

export default App
