import { openPopup, popupOpenPicture } from "./index.js";
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

class Card {
  static _template = document.querySelector("#to-do-element").content;

  constructor(link, name) {
    this._link = link;
    this._name = name;
  }

  _getTemplate() {
    const cardPicture = document
      .querySelector("#to-do-element")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardPicture;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); //добавили обработчики
    this._element.querySelector(".element__picture").src = this._link;
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
  }

  // _openImage() {
  //   this._element.
  // }
}

export { initialCards, Card };
