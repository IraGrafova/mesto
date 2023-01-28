//объявляем попапы
const popupElement = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddPicture = document.querySelector(".popup_type_add-picture");
const popupOpenPicture = document.querySelector(".popup_type_open-picture");

const formEdit = popupElement.querySelector(".card-form");

//объявляем кнопки работы с попапами
const editButton = document.querySelector(".profile-info__edit-button");
const addPictureButton = document.querySelector(".add-button");

//объявляем, что поля имя профиля и профессия заполняются из текстового значения в html
let profileNameInput = popupElement.querySelector("#name");
let profileJobInput = popupElement.querySelector("#job");

//объявляем имя профиля и профессию
let profileName = document.querySelector(".profile-info__title");
let profileJob = document.querySelector(".profile-info__subtitle");

//функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add("popup_is-opened");
};
//вешаем слушатель на кнопки
editButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});
addPictureButton.addEventListener("click", function () {
  openPopup(popupAddPicture);
});
//при открытии изображения передать src, alt и подпись картинки из данных карточки, при нажатии на которую произошло событие
const openPicture = (event) => {
  openPopup(popupOpenPicture);
  document.querySelector(".popup__image").src = event.target.src;
  document.querySelector(".popup__image").alt = event.target.alt;
  document.querySelector(".popup__caption").textContent = event.target.alt;
};

//объявляем кнопки закрытия попапов
const closePopupEditProfile = document.querySelector(".popup__close_type_edit-profile");
const closePopupAddPicture = document.querySelector(".popup__close_type_add-picture");
const closePopupOpenPicture = document.querySelector(".popup__close_type_open-picture");

//функция закрытия попапа
const closePopup = function (buttonClose) {
  buttonClose.classList.remove("popup_is-opened");
};

//вешаем слушатель на 3 кнопки
closePopupEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
closePopupAddPicture.addEventListener("click", function () {
  closePopup(popupAddPicture);
});
closePopupOpenPicture.addEventListener("click", function () {
  closePopup(popupOpenPicture);
});

//функция сохранить
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(popupEditProfile);
  closePopup(popupAddPicture);
}
formEdit.addEventListener("submit", handleFormSubmit);

// //объявляем кнопки лайк
const likeButtons = document.querySelectorAll(".element__button-like");

//функция переключения лайка
const clickLike = (event) => {
  event.target.classList.toggle("element__button-like_active");
};
//добавим обработчик на существующие карточки
const like = likeButtons.forEach((button) => {
  button.addEventListener("click", clickLike);
});

//при нажатии на урну - удалить карточку
const trashButtons = document.querySelectorAll(".element__trash"); //выбрали кнопки удаления
//функция удаления карточки
const removeCard = (event) => {
  event.target.closest(".element").remove();
};
//добавим обработчик на существующие карточки
const trashButton = trashButtons.forEach((button) => {
  button.addEventListener("click", removeCard);
});

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
  container.querySelector(".element__picture").src = card.link;
  container.querySelector(".element__picture").alt = card.name;
  container.querySelector(".element__title").textContent = card.name;

  container
    .querySelector(".element__button-like")
    .addEventListener("click", clickLike);
  container
    .querySelector(".element__trash")
    .addEventListener("click", removeCard);
  container
    .querySelector(".button-image")
    .addEventListener("click", openPicture);
  return container.firstElementChild;
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
  let newCard = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  renderCard(newCard);
  inputPlace.value = "";
  inputLink.value = "";
  closePopup(popupAddPicture);
};

formCard.addEventListener("submit", cardFormSubmit);

//попап - открыть картинку, для карточек добавленных изначально
const openPictureButtons = document.querySelectorAll(".button-image");
//вешаем слушатель для открытия изображения на карточки, добавленные на страницу изначально
const openOldPicture = openPictureButtons.forEach((button) => {
  button.addEventListener("click", openPicture);
});
