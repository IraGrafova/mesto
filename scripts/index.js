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
  popup.addEventListener("click", closePopupByClickOnOverlay);
};

//вешаем слушатель на кнопки открытия попапов
buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});
buttonAddCard.addEventListener("click", function () {
  openPopup(popupAddPicture);
});

// функция закрытия попапов
const closePopup = function (popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", closePopupByClickOnOverlay);
};

// закрыть попап по нажатию на кнопку крестик, перебираем кнопки, вешаем слушатель на каждую
const buttonsClose = document.querySelectorAll(".popup__close");
buttonsClose.forEach((button) => {
  button.addEventListener("click", () => {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  });
});

// закрыть попап при клике на оверлей
const closePopupByClickOnOverlay = function (event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
};

// закрыть попап при клике на Escape
function EscHandler(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}
document.addEventListener("keydown", EscHandler);

//функция сохранить изменения данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(popupEditProfile);
}
formEdit.addEventListener("submit", handleFormSubmit);

//добавление карточек на страницу
const elementsList = document.querySelector(".elements");
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
const template = document.querySelector("#to-do-element");
const createCard = (card) => {
  const cardPicture = template.content
    .querySelector(".element")
    .cloneNode(true); //контент=выбрать весь контент внутри

  cardPicture.querySelector(".element__picture").src = card.link;
  cardPicture.querySelector(".element__picture").alt = card.name;
  cardPicture.querySelector(".element__title").textContent = card.name;

  const buttonTrash = cardPicture.querySelector(".element__trash");
  buttonTrash.addEventListener("click", () => {
    cardPicture.remove();
  });
  const buttonLike = cardPicture.querySelector(".element__button-like");
  buttonLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__button-like_active");
  });

  const buttonOpenImage = cardPicture.querySelector(".button-image");
  buttonOpenImage.addEventListener("click", (event) => {
    popupImage.src = event.target.src;
    popupImage.alt = event.target.alt;
    popupCaption.textContent = event.target.alt;
    openPopup(popupOpenPicture);
  });

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

//функция сохранить новую карточку при нажатии на "Сохранить"
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
