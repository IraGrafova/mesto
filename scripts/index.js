//объявляем попапы
const popupElement = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddPicture = document.querySelector(".popup_type_add-picture");
const popupOpenPicture = document.querySelector(".popup_type_open-picture");

const formEdit = popupElement.querySelector(".card-form");

//объявляем кнопки работы с попапами
const buttonEditProfile = document.querySelector(".profile-info__edit-button");
const buttonAddCard = document.querySelector(".add-button");

//объявляем, что поля имя профиля и профессия заполняются из текстового значения в html
const profileNameInput = popupElement.querySelector("#name");
const profileJobInput = popupElement.querySelector("#job");

//объявляем имя профиля и профессию
const profileName = document.querySelector(".profile-info__title");
const profileJob = document.querySelector(".profile-info__subtitle");

//функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add("popup_is-opened");
};
//вешаем слушатель на кнопки
buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});
buttonAddCard.addEventListener("click", function () {
  openPopup(popupAddPicture);
});
// //при открытии изображения передать src, alt и подпись картинки из данных карточки, при нажатии на которую произошло событие
// const popupImage = document.querySelector(".popup__image");
// const popupCaption = document.querySelector(".popup__caption");
// const openPicture = (event) => {
//   popupImage.src = event.target.src;
//   popupImage.alt = event.target.alt;
//   popupCaption.textContent = event.target.alt;
//   openPopup(popupOpenPicture);
// };

//объявляем кнопки закрытия попапов
const buttonClosePopupEditProfile = document.querySelector(".popup__close_type_edit-profile");
const buttonClosePopupAddPicture = document.querySelector(".popup__close_type_add-picture");
const buttonClosePopupOpenPicture = document.querySelector(".popup__close_type_open-picture");

//функция закрытия попапа
const closePopup = function (buttonClose) {
  buttonClose.classList.remove("popup_is-opened");
};

//вешаем слушатель на 3 кнопки
buttonClosePopupEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
buttonClosePopupAddPicture.addEventListener("click", function () {
  closePopup(popupAddPicture);
});
buttonClosePopupOpenPicture.addEventListener("click", function () {
  closePopup(popupOpenPicture);
});

//функция сохранить
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(popupEditProfile);
}
formEdit.addEventListener("submit", handleFormSubmit);

// //объявляем кнопки лайк
//const buttonsLike = document.querySelectorAll(".element__button-like");

//функция переключения лайка
// const clickLike = (event) => {
//   event.target.classList.toggle("element__button-like_active");
// };
// //добавим обработчик на существующие карточки
// const like = buttonsLike.forEach((button) => {
//   button.addEventListener("click", clickLike);
// });

//при нажатии на урну - удалить карточку
// const buttonsTrash = document.querySelectorAll(".element__trash"); //выбрали кнопки удаления
// //функция удаления карточки
// const removeCard = (event) => {
//   event.target.closest(".element").remove();
// };
// //добавим обработчик на существующие карточки
// const trashButton = buttonsTrash.forEach((button) => {
//   button.addEventListener("click", removeCard);
// });

//добавление карточек на страницу
//контент=выбрать весь контент внутри
const elementsList = document.querySelector(".elements");
const template = document.querySelector("#to-do-element").content;
const popupForm = document.querySelector(".popup__form");

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
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const createCard = (card) => {
  const template = `
    <li class="element">
      <button class="element__trash"></button>
      <button class="button-image">
       <img class="element__picture" src="" alt=""/>
      </button>
      <div class="element__label">
        <h2 class="element__title"></h2>
        <button class="element__button-like" type="button"></button>
      </div>
    </li>
  `;
  const container = document.createElement("div");

  container.innerHTML = template;
  const cardPicture = container.firstElementChild;
  cardPicture.querySelector(".element__picture").src = card.link;
  cardPicture.querySelector(".element__picture").alt = card.name;
  cardPicture.querySelector(".element__title").textContent = card.name;

  const buttonTrash = cardPicture.querySelector(".element__trash");
  buttonTrash.addEventListener('click', () => {
    cardPicture.remove();
  });
  const buttonLike = cardPicture.querySelector(".element__button-like");
  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle("element__button-like_active");
  });


const buttonOpenImage = cardPicture.querySelector('.button-image');
buttonOpenImage.addEventListener('click', (event) => {
   popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupCaption.textContent = event.target.alt;
  openPopup(popupOpenPicture);
});
  // cardPicture
  //   .querySelector(".element__button-like")
  //   .addEventListener("click", clickLike);
  //   cardPicture
  //   .querySelector(".element__trash")
  //   .addEventListener("click", removeCard);
  //   cardPicture
  //   .querySelector(".button-image")
  //   .addEventListener("click", openPicture);
  return cardPicture;
};

const renderCard = (card) => {
  elementsList.prepend(createCard(card));
};

initialCards.forEach((element) => {
  renderCard(element);
});

const formCard = document.querySelector("#form-card");
const inputPlace = document.querySelector("#place");
const inputLink = document.querySelector("#place-link");

const cardFormSubmit = (evt) => {
  evt.preventDefault();
  //из инпута достаем value
  const newCard = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  renderCard(newCard);
  closePopup(popupAddPicture);
  inputPlace.value = "";
  inputLink.value = "";
};

formCard.addEventListener("submit", cardFormSubmit);

//попап - открыть картинку, для карточек добавленных изначально
// const buttonsOpenPicture = document.querySelectorAll(".button-image");
// //вешаем слушатель для открытия изображения на карточки, добавленные на страницу изначально
// const openOldPicture = buttonsOpenPicture.forEach((button) => {
//   button.addEventListener("click", openPicture);
// });
