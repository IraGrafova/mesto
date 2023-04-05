import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  formValidationConfig,
  formEdit,
  cardForm,
  formAvatar,
  buttonEditProfile,
  buttonAddCard,
  elementsListSelector,
  buttonEditAvatar,
} from "../utils/constans.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

import "../../pages/index.css";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";

//попап с изображением

//открыть попап - крупное изображение карточки

const imagePopup = new PopupWithImage(".popup_type_open-picture");

function handleCardClick(link, name) {
  imagePopup.openImagePopup(link, name); //получает данные карточки из класса кард и передает их в класс PopupWithImage
}

imagePopup.setEventListeners();

//редактирование данных профиля

//слушатель на кнопку редактирования данных профиля
buttonEditProfile.addEventListener("click", () => {
  //перед открытием попапа передаем данные из разметки в инпуты, открываем попап
  //при клике методом getUserInfo() получаем объект и значение этого объекта ставим в инпуты, затем открываем попап
  const info = newUserInfo.getUserInfo();
  popupProfile.setinputValues(info);
  editProfileForm.resetValidation();
  popupProfile.open();
});

//валидация форм
const editProfileForm = new FormValidator(formValidationConfig, formEdit);
editProfileForm.enableValidation();
const addCardForm = new FormValidator(formValidationConfig, cardForm);
addCardForm.enableValidation();
const editAvatarForm = new FormValidator(formValidationConfig, formAvatar);
editAvatarForm.enableValidation();

//создаем экземпляр класса
const popupAddCard = new PopupWithForm(".popup_type_add-picture", {
  callbackSubmitForm: (inputValues) => {
    //callbackSubmitForm передает значения инпутов из PopupWithForm
    popupAddCard.setButtonLoading("Сохранение...");
    api
      .saveCard(inputValues)
      .then((data) => {
        renderCard(data);
        //console.log(data)
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        popupAddCard.setButtonLoading("Создать");
      });
  },
});

//слушатель на кнопку открытия попапа добавления карточек
buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();
});

popupAddCard.setEventListeners();

const popupDeleteCard = new PopupWithSubmit(".popup_type_delete-card", {
  functionWithSubmit: (id, card) => {
    api
      .deleteCard(id) //в кард ищем id карточки и передаем его в api
      .then(() => {
        card.trashCard();
      })
      .catch((err) => {
        alert(err);
      });
  },
});

let profileID;

//функция создания новой карточки
function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick,
      handleLikeClick: (id) => {
        if (card.isCardLiked()) {
          api
            .removeLike(id) //сюда нужно передать id карточки
            .then((data) => {
              card.deleteLike();
              card.countLikes(data.likes);
            })
            .catch((err) => {
              alert(err);
            });
        } else {
          api
            .putLike(id)
            .then((data) => {
              card.addLike();
              card.countLikes(data.likes);
            })
            .catch((err) => {
              alert(err);
            });
        }
      },

      handleDeleteClick: (id) => {
        console.log(id, card)
        popupDeleteCard.open(id, card);
      },
    },
    "#to-do-element",
    profileID
  ); // Создадим экземпляр карточки
  return card.generateCard(); //возвращаем карточку наружу
}
popupDeleteCard.setEventListeners();

//создаем карточку и добавляем ее на страницу
function renderCard(item) {
  const cardElement = createCard(item);
  cardSection.addItem(cardElement);
}

//экземпляр класса Api для работы с карточками
// передаем ему в качестве объекта адрес и токен
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    "content-type": "application/json",
    authorization: "e31129f1-5493-4dd7-bb19-51cc3d3b29e6",
  },
});

//вызываем метод getAllCards() (получить все карточки)
const cards = api.getAllCards();

//создаем экземпляр класса и передаем в него функцию renderCard и селектор UL элемента страницы
const cardSection = new Section({ renderer: renderCard }, elementsListSelector);

const popupProfile = new PopupWithForm(".popup_type_edit-profile", {
  callbackSubmitForm: (data) => {
    popupProfile.setButtonLoading("Сохранение...");
    api
      .editUserInfo({ name: data.name, about: data.description })
      .then((data) => newUserInfo.setUserInfo(data))
      .catch((err) => console.log(err))
      .finally(() => {
        popupProfile.setButtonLoading("Сохранить");
      });
    //callbackSubmitForm передает значения инпутов в метод _saveUserInfo класса UserInfo
  },
});

popupProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm(".popup_type_edit-avatar", {
  callbackSubmitForm: (inputValues) => {
    popupEditAvatar.setButtonLoading("Сохранение...");
    api
      .editAvatar({ avatar: inputValues.avatar })
      .then((data) => newUserInfo.setUserInfo(data))
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditAvatar.setButtonLoading("Сохранить");
      });
  },
});
buttonEditAvatar.addEventListener("click", () => {
  popupEditAvatar.open();
});
popupEditAvatar.setEventListeners();

const myUserInfo = api.getUserInfo(); // получчение данных о пользователе и добавление их на страницу

//создаем экземпляр класса, передаем в него селекторы html разметки
const newUserInfo = new UserInfo({
  profileNameSelector: ".profile-info__title",
  descriptionSelector: ".profile-info__subtitle",
  avatarSelector: ".avatar",
});

Promise.all([myUserInfo, cards])
  .then(([myUserInfo, cards]) => {
    //console.log('cards' + cards)
    newUserInfo.setUserInfo(myUserInfo);
    profileID = myUserInfo._id;

    cardSection.renderItems(cards);
  })
  .catch((err) => {
    alert(err);
  });
