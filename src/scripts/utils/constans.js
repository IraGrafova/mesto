const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const formValidationConfig = {
  formSelector: ".card-form",
  inputSelector: ".card-form__input",
  errorClass: "card-form__input_type_error",
  buttonSelector: ".card-form__save",
  buttonDisabledClass: "card-form__save_disabled",
};

//инпуты попапа добавления карточек
const inputPlace = document.querySelector("#place");
const inputLink = document.querySelector("#place-link");

//инпуты попапа редактирования профиля
const profileNameInput = document.querySelector("#name");
const profileDescriptionInput = document.querySelector("#job");

//находим формы
const formEdit = document.forms["edit-profile-form"];
const cardForm = document.forms["card-form"];

//объявляем кнопки работы с попапами
const buttonEditProfile = document.querySelector(".profile-info__edit-button");
const buttonAddCard = document.querySelector(".add-button");

//селектор куда вставляем карточки из темплейта
const elementsListSelector = ".elements";

export {
  initialCards,
  formValidationConfig,
  inputPlace,
  inputLink,
  formEdit,
  cardForm,
  buttonEditProfile,
  buttonAddCard,
  profileNameInput,
  profileDescriptionInput,
  elementsListSelector,
};
