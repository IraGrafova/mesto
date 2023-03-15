import { Popup } from "./Popup.js";

// const formEdit = document.forms["edit-profile-form"];
// const cardForm = document.forms["card-form"];

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this.callbackSubmitForm = callbackSubmitForm;
  }

  _getInputValues() {

  }

  listenersPopupWithForm() {
    super.setEventListeners();
    const buttonSubmit = super.popupSelector.querySelector('.card-form__save');
    buttonSubmit.addEventListener('submit', super.popupSelector);
  }

  resetForm() {
    super.close();
    reset();
  }
}
