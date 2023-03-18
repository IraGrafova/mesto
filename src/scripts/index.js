import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from './constans.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage';
import { PopupWithForm } from './PopupWithForm';
import { UserInfo } from './UserInfo.js';

import '../pages/index.css'

//объявляем попапы
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddPicture = document.querySelector(".popup_type_add-picture");
const popupOpenPicture = document.querySelector(".popup_type_open-picture");


//находим формы
const formEdit = document.forms["edit-profile-form"];
const cardForm = document.forms["card-form"];

//объявляем кнопки работы с попапами
const buttonEditProfile = document.querySelector(".profile-info__edit-button");
const buttonAddCard = document.querySelector(".add-button");

//объявляем, что поля имя профиля и профессия заполняются из текстового значения в html
const profileNameInput = popupEditProfile.querySelector("#name");
const profileJobInput = popupEditProfile.querySelector("#job");

//объявляем имя профиля и профессию
const profileName = document.querySelector(".profile-info__title");
const profileJob = document.querySelector(".profile-info__subtitle");

//функция открытия попапа
// const openPopup = function (popup) {
//   popup.classList.add("popup_is-opened");
//   popup.addEventListener("mousedown", closePopupByClickOnOverlay);
//   document.addEventListener("keydown", handleEscape);
// };

//вешаем слушатель на кнопки открытия попапов
// buttonEditProfile.addEventListener("click", function () {
//   openPopup(popupEditProfile);
//   profileNameInput.value = profileName.textContent;
//   profileJobInput.value = profileJob.textContent;
// });
// buttonAddCard.addEventListener("click", function () {
//   openPopup(popupAddPicture);
// });

// функция закрытия попапов
//const closePopup = function (popup) {
  // popup.classList.remove("popup_is-opened");
  // popup.removeEventListener("mousedown", closePopupByClickOnOverlay);
  // document.removeEventListener("keydown", handleEscape);
//};

// закрыть попап по нажатию на кнопку крестик, перебираем кнопки, вешаем слушатель на каждую
// const closeButtons = document.querySelectorAll(".popup__close");
// closeButtons.forEach((button) => {
//   const popup = button.closest(".popup");
//   button.addEventListener("click", () => closePopup(popup));
// });

// закрыть попап при клике на оверлей
// const closePopupByClickOnOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup(event.currentTarget);
//   }
// };

// закрыть попап при клике на Escape
//function handleEscape(evt) {
  // if (evt.key === "Escape") {
  //   const openedPopup = document.querySelector(".popup_is-opened");
  //   closePopup(openedPopup);
  // }
//}



 const formCard = document.querySelector("#form-card");
 const inputPlace = document.querySelector("#place");
 const inputLink = document.querySelector("#place-link");




const elementsList = ".elements";

//функция создания новой карточки
function createCard(item) {
  const card = new Card({data: item, handleCardClick}, "#to-do-element"); // Создадим экземпляр карточки
  return card.generateCard(); //возвращаем карточку наружу
}

function renderCard(item) {
  const cardElement = createCard(item)
  cardSection.addItem(cardElement);
}

const cardSection = new Section({items: initialCards, renderer: renderCard}, elementsList);

cardSection.renderItems();


// function createNewCard() {
//   const newPicture = new PopupWithForm (popupAddPicture, submitCardForm);
// }



//попробуем открыть попап карточки

const popupElementOpenPicture = new Popup (".popup_type_open-picture");

popupElementOpenPicture.setEventListeners();

const imagePopup = new PopupWithImage (".popup_type_open-picture");


function handleCardClick(link, name) {
  imagePopup.openImagePopup(link, name); //получает данные карточки из класса кард и передает их в класс PopupWithImage
};




//console.log(Popup)







// const renderCard = (item) => {
//   const card = createCard(item);
//   elementsList.prepend(card); //добавляем карточку в DOM
// };

// //перебираем карточки из массива
// initialCards.forEach((item) => {
//   renderCard(item);
// });

//функция сохранить новую карточку при нажатии на "Сохранить"
const submitCardForm = (evt) => {
  evt.preventDefault();
  //из инпута достаем value
  const newCard = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  //evt.target.reset();
  renderCard(newCard);
  //closePopup(popupAddPicture);

};

//formCard.addEventListener("submit", submitCardForm);




// //функция сохранить изменения данных профиля
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = profileNameInput.value;
//   profileJob.textContent = profileJobInput.value;
//   closePopup(popupEditProfile);
//   evt.target.reset();
// }
// formEdit.addEventListener("submit", handleProfileFormSubmit);





const newUserInfo = new UserInfo ({profileNameSelector: '.profile-info__title', descriptionSelector: '.profile-info__subtitle'});
//newUserInfo.getUserInfo();
//
//console.log(newUserInfo.getUserInfo())
// !!! Нужно реализовать сабмит форм, потом вешаем слушатель на кнопку открытия попапа, запускаем getUserInfo(), чтобы получить данные из разметки и открываем попап

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  newUserInfo.setUserInfo(); // должен получить объект с именем и описанием
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  //closePopup(popupEditProfile);
  //evt.target.reset();

return handleProfileFormSubmit;

}

 const popupProfile = new  PopupWithForm (".popup_type_edit-profile", handleProfileFormSubmit);

 popupProfile.setEventListeners();
// popupProfile.close()

buttonEditProfile.addEventListener('click', () => { //перед открытием попапа передаем данные из разметки в инпуты, открываем попап
 // по моей логике при клике методом getUserInfo() получем объект и значение этого объекта ставим в инпуты, затем открываем попап
  const info = newUserInfo.getUserInfo();
  profileNameInput.value = info.name;
  profileJobInput.value = info.description;
  editProfileForm.resetValidation();
  popupProfile.open();
});
//



const popupAddCard = new PopupWithForm (".popup_type_add-picture", submitCardForm);

buttonAddCard.addEventListener('click', () => {popupAddCard.open()});



popupAddCard.setEventListeners();
























// const popupEditProfile = document.querySelector(".popup_type_edit-profile");
// const popupAddPicture = document.querySelector(".popup_type_add-picture");
// const popupOpenPicture = document.querySelector(".popup_type_open-picture");
// //находим формы
// const formEdit = document.forms["edit-profile-form"];
// const cardForm = document.forms["card-form"];



const formValidationConfig = {
  formSelector: ".card-form",
  inputSelector: ".card-form__input",
  errorClass: "card-form__input_type_error",
  buttonSelector: ".card-form__save",
  buttonDisabledClass: "card-form__save_disabled",
};

//валидация форм
const editProfileForm = new FormValidator(formValidationConfig, formEdit);
editProfileForm.enableValidation();
const addCardForm = new FormValidator(formValidationConfig, cardForm);
addCardForm.enableValidation();

//export { openPopup, popupOpenPicture, formValidationConfig };

export {popupOpenPicture, formValidationConfig, handleCardClick };
