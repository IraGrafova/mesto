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

    //находим данные попапа открытия карточек
    document.querySelector(".popup__image").src = this._link;
    document.querySelector(".popup__image").alt = this._name;
    document.querySelector(".popup__caption").textContent = this._name;

    //находим кнопку лайка
    this._likeButton = this._element.querySelector(".element__button-like");
    this._card = this._element;

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
        this._openCard();
      });
  }

  _handleLikeClick() {
    this._likeButton
      .classList.toggle("element__button-like_active");
  }

  _openCard() {
    openPopup(popupOpenPicture);
  }

  _trashCard() {
    this._card.remove();
    this._card = null;
  }
}

export { Card };
