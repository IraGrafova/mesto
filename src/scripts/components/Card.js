export class Card {
  //передаем в конструктор ссылку и имя карточки
  constructor({ data, handleCardClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;

    //находим данные попапа открытия карточек
    this._popupImageSrc = document.querySelector(".popup__image");
    this._popupImageAlt = document.querySelector(".popup__image");
    this._popupImageCaption = document.querySelector(".popup__caption");
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

    //при нажатии на карточку вызывается функция handleCardClick() из index.js, которая передает данные this._link, this._name в класс PopupWithImage, в классе PopupWithImage срабатывает логика присвоения в src и name попапа переданных данных
    this._element
      .querySelector(".button-image")
      .addEventListener("click", (event) => {
        this.handleCardClick(this._link, this._name);
      });
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("element__button-like_active");
  }

  _trashCard() {
    this._card.remove();
    this._card = null;
  }
}
