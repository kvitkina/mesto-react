import React from 'react'
import PopupWithForm from './PopupWithForm'

function ConfirmDeletePopup({ cardId, isOpen, onClose, onSubmit, onOverlayClose } ) {
   const handleConfirm = (e) => {
    e.preventDefault()
    onSubmit(cardId)
   }

  return (
    <PopupWithForm 
      name="delete" 
      title="Вы уверенны?" 
      submit="Да" 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleConfirm}
      onOverlayClose={onOverlayClose}
    />
  )
}

export default ConfirmDeletePopup
