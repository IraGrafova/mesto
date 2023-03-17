import { Popup } from "./Popup.js";

// const formEdit = document.forms["edit-profile-form"];
// const cardForm = document.forms["card-form"];



export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    // this._buttonEditProfile = document.querySelector(".profile-info__edit-button");
    // this._buttonAddCard = document.querySelector(".add-button");
    //console.log(this._buttonEditProfile)

  }

  _getInputValues() {
  //   evt.preventDefault();
  // profileName.textContent = profileNameInput.value;
  // profileJob.textContent = profileJobInput.value;
  // closePopup(popupEditProfile);
  // evt.target.reset();

  }

  setEventListeners() {
    super.setEventListeners();


// const buttonSubmit = super.popupSelector.querySelector('.card-form__save');
    // buttonSubmit.addEventListener('submit', super.popupSelector);

  }

  close() {
    super.close();
    this._callbackSubmitForm.reset();
  }
}
