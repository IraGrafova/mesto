import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  initialCards,
  formValidationConfig,
  formEdit,
  cardForm,
  formAvatar,
  buttonEditProfile,
  buttonAddCard,
  elementsListSelector,
  buttonEditAvatar
} from "../utils/constans.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

import "../../pages/index.css";


//создание начальных карточек

// //функция создания новой карточки
// function createCard(item) {
//   const card = new Card({ data: item, handleCardClick }, "#to-do-element"); // Создадим экземпляр карточки
//   return card.generateCard(); //возвращаем карточку наружу
// }

// //создаем карточку и добавляем ее на страницу
// function renderCard(item) {
//   const cardElement = createCard(item);
//   cardSection.addItem(cardElement);
// }

// //создаем экземпляр класса и передаем в него функцию renderCard и селектор UL элемента страницы
// const cardSection = new Section(
//   { items: initialCards, renderer: renderCard },
//   elementsListSelector
// );

// cardSection.renderItems();


//попап с изображением

//открыть попап - крупное изображение карточки

const imagePopup = new PopupWithImage(".popup_type_open-picture");

function handleCardClick(link, name) {
  imagePopup.openImagePopup(link, name); //получает данные карточки из класса кард и передает их в класс PopupWithImage
}

imagePopup.setEventListeners();

//редактирование данных профиля

// //создаем экземпляр класса, передаем в него селекторы html разметки
// const newUserInfo = new UserInfo({
//   profileNameSelector: ".profile-info__title",
//   descriptionSelector: ".profile-info__subtitle",
//   api:
// });

//создаем экземпляр класса
// const popupProfile = new PopupWithForm(".popup_type_edit-profile", {
//   callbackSubmitForm: (inputValues) => {
//     //callbackSubmitForm передает значения инпутов в метод setUserInfo класса UserInfo
//     newUserInfo.setUserInfo(inputValues);
//   },
// });

// popupProfile.setEventListeners();

//слушатель на кнопку редактирования данных профиля
buttonEditProfile.addEventListener("click", () => {
  //перед открытием попапа передаем данные из разметки в инпуты, открываем попап
  //при клике методом getUserInfo() получаем объект и значение этого объекта ставим в инпуты, затем открываем попап
  const info = newUserInfo.getUserInfo();
  popupProfile.setinputValues(info);
  editProfileForm.resetValidation();
  popupProfile.open();
});


//добавление новых карточек


//валидация форм
const editProfileForm = new FormValidator(formValidationConfig, formEdit);
editProfileForm.enableValidation();
const addCardForm = new FormValidator(formValidationConfig, cardForm);
addCardForm.enableValidation();
const editAvatarForm = new FormValidator(formValidationConfig, formAvatar);
editAvatarForm.enableValidation();




const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', {
  callbackSubmitForm: (inputValues) => {
    newUserInfo.saveNewAvatar(inputValues);
    //console.log(inputValues)
  }
})
buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
})
popupEditAvatar.setEventListeners();




//создаем экземпляр класса
const popupAddCard = new PopupWithForm(".popup_type_add-picture", {
  callbackSubmitForm: (inputValues) => { //callbackSubmitForm передает значения инпутов из PopupWithForm
    popupAddCard.setButtonLoading('Сохранение...');
api.saveCard(inputValues)
.then((data) => {
  renderCard(data);
  //console.log(data)
})
.catch((err) => {alert(err)})
.finally(() => {
  popupAddCard.setButtonLoading('Создать');
})

  },
});

//слушатель на кнопку открытия попапа добавления карточек
buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();
});

popupAddCard.setEventListeners();

let profileID;

  //функция создания новой карточки
  function createCard(item) {
    //console.log(item)
    const card = new Card({
      data: item,
      handleCardClick,
      handleLikeClick: (id) => {
        if (card.isCardLiked()) {
        api.removeLike(id) //сюда нужно передать id карточки
        .then ((data) => {
          //console.log(data)
            card.deleteLike();
            card.countLikes(data.likes);
        }
        )
      } else {
        api.putLike(id)
        .then ((data) => {
          card.addLike();
          card.countLikes(data.likes);
        })
      }},
      handleDeleteClick: (id) => {
        api.deleteCard(id)
        .then((data) => {
          card.trashCard();
        })

    },

  }, "#to-do-element", profileID ); // Создадим экземпляр карточки
    // card.likeCount();
    return card.generateCard(); //возвращаем карточку наружу
  }

//создаем карточку и добавляем ее на страницу
function renderCard(item) {
  const cardElement = createCard(item);
  cardSection.addItem(cardElement);
  //console.log('index171:' + item)
}

// //создаем экземпляр класса и передаем в него функцию renderCard и селектор UL элемента страницы
// const cardSection = new Section(
//   { renderer: renderCard, api: api },
//   elementsListSelector
// );


//экземпляр класса Api для работы с карточками
// передаем ему в качестве объекта адрес и токен
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    'content-type': 'application/json',
    authorization: 'e31129f1-5493-4dd7-bb19-51cc3d3b29e6'
  }
});






//вызываем метод getAllCards() (получить все карточки)
 const cards = api.getAllCards();

//создаем экземпляр класса и передаем в него функцию renderCard и селектор UL элемента страницы
const cardSection = new Section(
  { renderer: renderCard, api: api },
  elementsListSelector
);



//создаем экземпляр класса для получения данных о User
const popupProfile = new PopupWithForm(".popup_type_edit-profile", {
  callbackSubmitForm: (data) => {
    //callbackSubmitForm передает значения инпутов в метод _saveUserInfo класса UserInfo
    newUserInfo.saveUserInfo(data);
  },
});
popupProfile.setEventListeners();


 const myUserInfo = api.getUserInfo(); // получчение данных о пользователе и добавление их на страницу
// myUserInfo.then(data => {
// newUserInfo.setUserInfo(data);
// profileID = data._id;
// //console.log('id:'+ profileID)
// //return profileID

// })
// .catch((err) => {alert(err)});
//console.log('id:'+ profileID)
//создаем экземпляр класса, передаем в него селекторы html разметки
const newUserInfo = new UserInfo({
  profileNameSelector: ".profile-info__title",
  descriptionSelector: ".profile-info__subtitle",
  avatarSelector: '.avatar',
  api: api
});

Promise.all([myUserInfo, cards])
  .then(([myUserInfo, cards]) => {
    //console.log('cards' + cards)
    newUserInfo.setUserInfo(myUserInfo);
    profileID = myUserInfo._id;

    cardSection.renderItems(cards);
  })
  .catch((err) => {alert(err)});
