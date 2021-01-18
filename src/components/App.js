import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

    const [isEditPlacePopupOpen, setIsEditPlace] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatar] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfile] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatar(true);
    }
    
    function handleEditProfileClick() {
        setIsEditProfile(true);
    }
    
    function handleAddPlaceClick() {
        setIsEditPlace(true);
    }

    function handleCardClick(props){
        setSelectedCard({status: true, title: props.name, links: props.link});
    }
    function closeAllPopups() {
        setIsEditAvatar(false);
        setIsEditProfile(false);
        setIsEditPlace(false);
        setSelectedCard({});
    }
  return (
  <div className="page">
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
    <Footer />
    <PopupWithForm name='popup' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
       <label className="popup__label">
            <input id="name-input" type="text" name="name" className="popup__text popup__text_name_input" required maxLength="40" minLength="2"></input>
            <span className="popup__error" id="name-input-error"></span>
        </label>
        <label className="popup__label">
            <input id="job-input" type="text" name="job" className="popup__text popup__text_job_input" required maxLength="200" minLength="2"></input>
            <span className="popup__error" id="job-input-error"></span>
        </label>
        <button type="submit" className="popup__button popup__button_form_save">Сохранить</button>
    </PopupWithForm>
    <PopupWithForm name='popup_cards' title='Новое место' isOpen={isEditPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
          <input type="text" id="input-name" name="name" placeholder="Название" className="popup__text popup__text_name_cards" required maxLength="30" minLength="2"></input>
          <span className="popup__error" id="input-name-error"></span>
        </label>
        <label className="popup__label">
            <input type="url" id="url-input" name="link"  placeholder="Ссылка на картинку" className="popup__text popup__text_job_cards" required></input>
            <span className="popup__error" id="url-input-error"></span>
        </label>
        <button type="submit" className="popup__button popup__button_save_form">Сохранить</button>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    <PopupWithForm name='delete__cards' title='Вы уверены?'>
        <button className="popup__button popup__delete_button">Да</button>
        <button type="reset" className="popup__close popup__delete_close_button"></button>
    </PopupWithForm>
    <PopupWithForm name='popup__avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
            <input type="url" id="url-input" name="link"  placeholder="Ссылка на аватар" className="popup__text popup__text_avatar" required></input>
            <span className="popup__error" id="url-input-error"></span>
        </label>
        <button type="submit" className="popup__button popup__button_avatar_form">Сохранить</button>
    </PopupWithForm>
  </div>
  );
}

export default App;
