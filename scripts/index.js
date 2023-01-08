
const popupElement = document.querySelector('.popup');
const formEdit = popupElement.querySelector('.edit-form');
const popupClose = popupElement.querySelector('.popup__close');
const editButton = document.querySelector('.profile-info__edit-button');
const saveButton = popupElement.querySelector('.edit-form__save');
let profileNameInput = popupElement.querySelector('#name');
let profileJobInput = popupElement.querySelector('#job');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');

//функция закрытия попапа
const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
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
