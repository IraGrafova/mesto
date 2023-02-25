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
    .content
    .querySelector(".element")
    .cloneNode(true);

    return cardPicture;
}

generateCard() {
  this._element = this._getTemplate();
  this._element.querySelector('.element__picture').src = this._link;
  this._element.querySelector('.element__title').textContent = this._name;

  return this._element;
}
}

initialCards.forEach(item => {
  const card = new Card(item.link, item.name);   // Создадим экземпляр карточки
  const cardElement = card.generateCard();   //создаем карточку и возвращаем наружу
  const elementsList = document.querySelector(".elements");

  elementsList.prepend(cardElement);    //добавляем карточку в DOM
})
//export default Card;
