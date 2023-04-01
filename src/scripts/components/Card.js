export class Card {
  //передаем в конструктор ссылку и имя карточки
  constructor({ data, handleCardClick }, templateSelector, profileID, api) { //сюда нужно передать ID
    this._link = data.link;
    this._name = data.name;
    this._cardID = data._id;
    this._userId = data.owner._id; // чужой id
    this._profileId = profileID; // мой id
    this._likesOnCard = data.likes; // все лайки карточки
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this._api = api;
    //console.log(this._profileId)

    //находим данные попапа открытия карточек
    this._popupImageSrc = document.querySelector(".popup__image");
    this._popupImageAlt = document.querySelector(".popup__image");
    this._popupImageCaption = document.querySelector(".popup__caption");

    this._addLike = this._addLike.bind(this);
    this._countLikes = this._countLikes.bind(this);

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
    this._likeCaption = this._element.querySelector(".element__like-sum");
    this._countLikes();
    //console.log(this._likeButton)
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

  // _handleLikeClick() {
  //   this._likeButton.classList.toggle("element__button-like_active");
  // }

  _addLike() { //его тоже где-то нужно вызывать
    this._likeButton.classList.add("element__button-like_active");

  }

  _deleteLike() {
    this._likeButton.classList.remove("element__button-like_active");
  }

  _countLikes() {
    this._likeCaption.textContent =  this._likesOnCard.length;


    if ( this._isCardLiked === true ) {
this._addLike();
//console.log(this._isCardLiked )
    } else {this._deleteLike()}
  }

  _isCardLiked() {
     return this._likesOnCard.some((item) => {
     console.log(this._profileId)
     console.log(item._id)
      item._id === this._profileId});
  }

  _handleLikeClick() {
    this._api
    .putLike(this._cardID)
    .then(this._countLikes)
    .catch((err) => console.log(err))
  }

  _trashCard() {
    this._card.remove();
    this._card = null;
  }

}
