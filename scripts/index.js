
//объявляем попапы
const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPicture = document.querySelector('.popup_type_add-picture');
const popupOpenPicture = document.querySelectorAll('.popup_type_open-picture');
//объявляем кнопки закрытия попапов
const closePopupEditProfile = document.querySelector('.popup__close_type_edit-profile');
const closePopupAddPicture = document.querySelector('.popup__close_type_add-picture');
const closePopupOpenPicture = document.querySelector('.popup__close_type_open-picture');

const buttonPicture = document.querySelector('.button-image');


const formEdit = popupElement.querySelector('.card-form');
const popupClose = popupElement.querySelector('.popup__close');
//объявляем 3 кнопки работы с попапами
const editButton = document.querySelector('.profile-info__edit-button');
const addPictureButton = document.querySelector('.add-button');
const openPictureButton = document.querySelector('.button-image');

const saveButton = popupElement.querySelector('.card-form__save');//зачем она
//объявляем, что поля имя профиля и профессия заполняются из текстового значения в html
let profileNameInput = popupElement.querySelector('#name');
let profileJobInput = popupElement.querySelector('#job');
let placeNameInput = popupElement.querySelector('#place');
let placeLinkInput = popupElement.querySelector('#place-link');

//объявляем название и ссылку (пока не знаю зачем)
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');


//функция закрытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');
}
//вешаем слушатель на 3 кнопки
editButton.addEventListener('click', function () {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
 profileJobInput.value = profileJob.textContent;
});
addPictureButton.addEventListener('click', function () {
  openPopup(popupAddPicture);
  //profileNameInput.value = profileName.textContent;
 //profileJobInput.value = profileJob.textContent;
});
openPictureButton.addEventListener('click', function () {
  openPopup(popupOpenPicture);
  //profileNameInput.value = profileName.textContent;
 //profileJobInput.value = profileJob.textContent;
});

//функция закрытия попапа
const closePopup = function(buttonClose) {
  buttonClose.classList.remove('popup_is-opened');
  //popupElement.classList.remove('popup_is-opened');
}
const closePopupByClickOnOverlay = function(event) {
  if(event.target === event.currentTarget) {
    closePopup();
  }
}

//вешаем слушатель на 3 кнопки
closePopupEditProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
closePopupAddPicture.addEventListener('click', function () {
  closePopup(popupAddPicture);
});
closePopupOpenPicture.addEventListener('click', function () {
  closePopup(popupOpenPicture);
});

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


//попытка добавления карточки на страницу
const template = document.querySelector('#to-do-element');
const addCard = template.querySelector('.element');

