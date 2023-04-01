import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(popup, {functionWithSubmit}) {
    super(popup);
    this._functionWithSubmit = functionWithSubmit;
    this._form = this._popup.querySelector(".card-form");
  }




setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._functionWithSubmit(); //здесь логика удаления
    this.close();
  })
}
}
