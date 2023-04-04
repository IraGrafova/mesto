export class Card {
  //передаем в конструктор ссылку и имя карточки
  constructor({ data, handleCardClick, handleLikeClick, handleDeleteClick }, templateSelector, profileID ) {
    this._link = data.link;
    this._name = data.name;
    this._cardID = data._id; // id карточки
    this._userId = data.owner._id; // чужой id
    this._profileId = profileID; // мой id
    this._likesOnCard = data.likes; // все лайки карточки
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    //console.log(this._profileId)

    //находим данные попапа открытия карточек
    this._popupImageSrc = document.querySelector(".popup__image");
    this._popupImageAlt = document.querySelector(".popup__image");
    this._popupImageCaption = document.querySelector(".popup__caption");

    //this._addLike = this.addLike.bind(this);
    // this._countLikes = this.countLikes.bind(this);
    // this.deleteTrashButton
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
    this._trashButton = this._element.querySelector('.element__trash');


    this.countLikes(this._likesOnCard);
    this._likeStatus(); //отвечает за отображение лайка при перезагрузке (за черное сердечко)
    //console.log(this._element)
    this.deleteTrashButton();


    return this._element;
  }

  _setEventListeners() {
    //все слушатели в одном месте
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", () => {
        //console.log(this._cardID)
        this._handleLikeClick(this._cardID);
      });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        //console.log('card  '+this._cardID)
        this._handleDeleteClick(this._cardID); //id карточки
        //this._handleDeleteClick()
      });

    //при нажатии на карточку вызывается функция handleCardClick() из index.js, которая передает данные this._link, this._name в класс PopupWithImage, в классе PopupWithImage срабатывает логика присвоения в src и name попапа переданных данных
    this._element
      .querySelector(".button-image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
  }

  // _handleLikeClick() {
  //   this._likeButton.classList.toggle("element__button-like_active");
  // }

  addLike() { //его тоже где-то нужно вызывать
    this._likeButton.classList.add("element__button-like_active");

  }

  deleteLike() {
    this._likeButton.classList.remove("element__button-like_active");
  }

  countLikes(data) { //при put запросе запускается этот метод, пересчитывается длина массива likes и переключается состояние кнопки like
    this.likeArray = data;
    this._likeCaption.textContent =  data.length; //принимает ответ с сервера и подставляет длину массива в текст контент лайков

      //console.log(data )

  }

  isCardLiked() {
     return this.likeArray.some((item) =>
    //   console.log(this._likesOnCard)
    //  console.log('мой id:' + this._profileId)
    //   console.log('id:' + item._id)
      item._id === this._profileId);
  }

   _likeStatus() {
    if (this.isCardLiked()) {
      this.addLike();
    } else {
      this.deleteLike();
    }
  }

  trashCard() {
    this._card.remove();
    this._card = null;
  }

  deleteTrashButton() { //если айдишники не равны, то значит это не моя карточка и нужно удалить урну
    if (this._profileId !== this._userId) {
    this._trashButton.remove();
  }
  }
}
