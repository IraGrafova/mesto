import { openPopup, popupOpenPicture, initialCards } from "./index.js";

class Card {
  //передаем в конструктор ссылку и имя карточки
  constructor(link, name, templateSelector) {
    this._link = link;
    this._name = name;
    this._templateSelector = templateSelector;
  }

  //получаем темплейт, клонируем, возвращаем карточку
  _getTemplate() {
    const cardPicture = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardPicture;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); //добавили обработчики
    this._element.querySelector(".element__picture").src = this._link;
    this._element.querySelector(".element__picture").alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;


    return this._element;
  }

  _setEventListeners() {
    //все слушатели в одном месте
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._trashCard();
      });

    this._element
      .querySelector(".button-image")
      .addEventListener("click", (event) => {
        document.querySelector(".popup__image").src = this._link;
        document.querySelector(".popup__image").alt = this._name;
        document.querySelector(".popup__caption").textContent = this._name;
        openPopup(popupOpenPicture);
      });
  }

  _handleLikeClick() {
    this._element
      .querySelector(".element__button-like")
      .classList.toggle("element__button-like_active");
  }

  _trashCard() {
    this._element.remove();
    this._element = null;
  }
}

export { Card };
