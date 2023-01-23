
//объявляем попапы
const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPicture = document.querySelector('.popup_type_add-picture');
const popupOpenPicture = document.querySelectorAll('.popup_type_open-picture');

const buttonPicture = document.querySelector('.button-image');


const formEdit = popupElement.querySelector('.card-form');

//объявляем 3 кнопки работы с попапами
const editButton = document.querySelector('.profile-info__edit-button');
const addPictureButton = document.querySelector('.add-button');
const openPictureButton = document.querySelector('.button-image');

const saveButton = popupElement.querySelector('.card-form__save');//зачем она
//объявляем, что поля имя профиля и профессия заполняются из текстового значения в html
let profileNameInput = popupElement.querySelector('#name');
let profileJobInput = popupElement.querySelector('#job');
//let placeNameInput = popupElement.querySelector('#place');
//let placeLinkInput = popupElement.querySelector('#place-link');

//объявляем название и ссылку (пока не знаю зачем)
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');


//функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');
}
//вешаем слушатель на 3 кнопки
editButton.addEventListener('click', function () {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
 profileJobInput.value = profileJob.textContent;
});
addPictureButton.addEventListener('click', function () {
  openPopup(popupAddPicture);
});
//openPictureButton.addEventListener('click', function () {
  //openPopup(popupOpenPicture);
  //profileNameInput.value = profileName.textContent;
 //profileJobInput.value = profileJob.textContent;
//});


//объявляем кнопки закрытия попапов
const popupClose = popupElement.querySelector('.popup__close');
const closePopupEditProfile = document.querySelector('.popup__close_type_edit-profile');
const closePopupAddPicture = document.querySelector('.popup__close_type_add-picture');
const closePopupOpenPicture = document.querySelector('.popup__close_type_open-picture');
//функция закрытия попапа
const closePopup = function (buttonClose) {
  buttonClose.classList.remove('popup_is-opened');
}
const closePopupByClickOnOverlay = function(event) {
  if(event.target === event.currentTarget) {
    closePopup(popupElement);
  }
}

//вешаем слушатель на 3 кнопки
closePopupEditProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
closePopupAddPicture.addEventListener('click', function () {
  closePopup(popupAddPicture);
});
//closePopupOpenPicture.addEventListener('click', function () {
 // closePopup(popupOpenPicture);
//});

popupClose.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

//функция сохранить
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent =  profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup ();
}
formEdit.addEventListener('submit', handleFormSubmit);



//попытка добавления карточки на страницу
//контент=выбрать весь контент внутри, клоннод = копирует ноду со всеми элементами внутри

const elementsList = document.querySelector('.elements');
const template = document.querySelector('#to-do-element').content;
const popupForm = document.querySelector('.popup__form')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
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
  const container = document.createElement('div');
  container.innerHTML = template;
  container.querySelector('.element__picture').src = card.link;
  container.querySelector('.element__picture').alt = card.name;
  container.querySelector('.element__title').textContent = card.name;


  return container.firstElementChild;
};


const renderCard = (card) => {
  elementsList.append(createCard(card));
};

initialCards.forEach((element) => {
  renderCard(element);
});

const formCard = document.querySelector("#form-card");
const inputPlace = document.querySelector('#place');

const cardFormSubmit = (evt) => {
  evt.preventDefault();
  //из инпута достаем value
  const placeName = inputPlace.value;
  renderCard(placeName);
  //inputPlace.value = '';


  closePopup (popupElement);
}

formCard.addEventListener('submit', cardFormSubmit);

