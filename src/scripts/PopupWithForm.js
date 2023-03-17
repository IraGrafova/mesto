import { Popup } from "./Popup.js";

// const formEdit = document.forms["edit-profile-form"];
// const cardForm = document.forms["card-form"];



export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {

    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    // this._buttonEditProfile = document.querySelector(".profile-info__edit-button");
    // this._buttonAddCard = document.querySelector(".add-button");
   // console.log(super(popupSelector))

   // this._cardForm = document.forms["card-form"];
   // this._form = super.popupSelector.querySelector('.card-form');

  }

  // _getInputValues() {
  //   evt.preventDefault(); //сброс автоматической перезагрузки страницы
  // // profileName.textContent = profileNameInput.value;
  // // profileJob.textContent = profileJobInput.value;
  // // closePopup(popupEditProfile);
  // // evt.target.reset();

  // }

  setEventListeners() {
    super.setEventListeners();


// const buttonSubmit = super.popupSelector.querySelector('.card-form__save');
//super.popupSelector.addEventListener('submit', () => {this._getInputValues()});

  }

  close() {
    super.close();
    this._callbackSubmitForm.reset();
  }
}
