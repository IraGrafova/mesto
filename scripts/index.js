
const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPicture = document.querySelector('.popup_type_add-picture');
const popupOpenPicture = document.querySelector('.popup_type_open-picture');
const closePopupEditProfile = document.querySelector('.popup__close_type_edit-profile');
const closePopupAddPicture = document.querySelector('.popup__close_type_add-picture');
const closePopupOpenPicture = document.querySelector('.popup__close_type_open-picture');

console.log(popupEditProfile, closePopupEditProfile, popupAddPicture, closePopupAddPicture, popupOpenPicture, closePopupOpenPicture);

const formEdit = popupElement.querySelector('.card-form');
const popupClose = popupElement.querySelector('.popup__close');
const editButton = document.querySelector('.profile-info__edit-button');
const saveButton = popupElement.querySelector('.card-form__save');
let profileNameInput = popupElement.querySelector('#name');
let profileJobInput = popupElement.querySelector('#job');
let placeNameInput = popupElement.querySelector('#place');
let placeLinkInput = popupElement.querySelector('#place-link');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');

//функция закрытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');

  //popupElement.classList.add('popup_is-opened');
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
}
const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}
const closePopupByClickOnOverlay = function(event) {
  if(event.target === event.currentTarget) {
    closePopup();
  }
}
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

//функция сохранить
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent =  profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup ();
}
formEdit.addEventListener('submit', handleFormSubmit);
