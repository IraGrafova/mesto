import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  initialCards,
  formValidationConfig,
  formEdit,
  cardForm,
  buttonEditProfile,
  buttonAddCard,
  elementsListSelector,
} from "../utils/constans.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo.js";

import "../../pages/index.css";


//создание начальных карточек

//функция создания новой карточки
function createCard(item) {
  const card = new Card({ data: item, handleCardClick }, "#to-do-element"); // Создадим экземпляр карточки
  return card.generateCard(); //возвращаем карточку наружу
}

//создаем карточку и добавляем ее на страницу
function renderCard(item) {
  const cardElement = createCard(item);
  cardSection.addItem(cardElement);
}

//создаем экземпляр класса и передаем в него функцию renderCard и селектор UL элемента страницы
const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  elementsListSelector
);

cardSection.renderItems();


//попап с изображением

//открыть попап - крупное изображение карточки

const imagePopup = new PopupWithImage(".popup_type_open-picture");

function handleCardClick(link, name) {
  imagePopup.openImagePopup(link, name); //получает данные карточки из класса кард и передает их в класс PopupWithImage
}

imagePopup.setEventListeners();

//редактирование данных профиля

//создаем экземпляр класса, передаем в него селекторы html разметки
const newUserInfo = new UserInfo({
  profileNameSelector: ".profile-info__title",
  descriptionSelector: ".profile-info__subtitle",
});

//создаем экземпляр класса
const popupProfile = new PopupWithForm(".popup_type_edit-profile", {
  callbackSubmitForm: (inputValues) => {
    //callbackSubmitForm передает значения инпутов в метод setUserInfo класса UserInfo
    newUserInfo.setUserInfo(inputValues);
  },
});

popupProfile.setEventListeners();

//слушатель на кнопку редактирования данных профиля
buttonEditProfile.addEventListener("click", () => {
  //перед открытием попапа передаем данные из разметки в инпуты, открываем попап
  //при клике методом getUserInfo() получаем объект и значение этого объекта ставим в инпуты, затем открываем попап
  const info = newUserInfo.getUserInfo();
  popupProfile.setinputValues(info);
  editProfileForm.resetValidation();
  popupProfile.open();
});


//добавление новых карточек

//создаем экземпляр класса
const popupAddCard = new PopupWithForm(".popup_type_add-picture", {
  callbackSubmitForm: (inputValues) => {
    //callbackSubmitForm передает значения инпутов из PopupWithForm
    renderCard(inputValues);
  },
});

//слушатель на кнопку открытия попапа добавления карточек
buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();
});

popupAddCard.setEventListeners();

//валидация форм
const editProfileForm = new FormValidator(formValidationConfig, formEdit);
editProfileForm.enableValidation();
const addCardForm = new FormValidator(formValidationConfig, cardForm);
addCardForm.enableValidation();
