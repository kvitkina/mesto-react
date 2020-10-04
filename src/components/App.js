import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import api from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import ConfirmDeletePopup from './ConfirmDeletePopup'

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState(null)
  const [cardToDelete, setCardToDelete] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .getAllInfo()
      .then((res) => {
        const [dataCards, dataProfile] = res
        setCards(dataCards)
        setCurrentUser(dataProfile)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  React.useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    }
    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  },[])

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id) // Снова проверяем, есть ли уже лайк на этой карточке
    api
      .putLike(card._id, !isLiked) // Отправляем запрос в API и получаем обновлённые данные карточки
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c)) // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        setCards(newCards) // Обновляем стейт
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleCardDislike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id) // Снова проверяем, есть ли уже лайк на этой карточке
    api
      .removeLike(card._id, !isLiked) // Отправляем запрос в API и получаем обновлённые данные карточки
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c)) // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        setCards(newCards) // Обновляем стейт
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleCardDelete = (id) => {
    api
      .deleteCard(id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== id)
        setCards(newCards)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdateAvatar = (data) => {
    api
      .editAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleAddPlaceSubmit = (newCard) => {
    api
      .addCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
  const handleDeleteClick = (cardId) => {
    setIsDeletePopupOpen(true)
    setCardToDelete(cardId)
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
    setIsDeletePopupOpen(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardDelete={handleDeleteClick}
            onCardLike={handleCardLike}
            onCardDislike={handleCardDislike}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ConfirmDeletePopup
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            cardId={cardToDelete}
            onSubmit={handleCardDelete}
          />
          <ImagePopup name="photo-zoom" card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
