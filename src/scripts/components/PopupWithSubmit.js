import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(popup, {functionWithSubmit}) {
    super(popup);
    this._functionWithSubmit = functionWithSubmit;
    this._form = this._popup.querySelector(".card-form");
  }

  open(card) { //card получаем из open в handleDeleteClick (index.js)
    super.open();
    this._card = card;
  }

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._functionWithSubmit(this._card); //здесь логика удаления
    this.close();
  })
}
}
