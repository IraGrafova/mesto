import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, { callbackSubmitForm }) {
    super(popup);
    this._callbackSubmitForm = callbackSubmitForm;
    this._form = this._popup.querySelector(".card-form");
    this._inputs = this._form.querySelectorAll(".card-form__input");
    this._saveButton = this._form.querySelector(".card-form__save");
  }

  //получить данные всех полей формы
  _getInputValues() {
    //создадим пустой объект, в который будем помещать данные всех инпутов
    this._inputValues = {};
    this._inputs.forEach((input) => {
      //перебираем все формы
      this._inputValues[input.name] = input.value; //у каждого inputa есть атрибут name, создаем объект, где свойство это name, а значение это значение inputa. Пример Input с name="job": {job: input.value}
    });

    return this._inputValues; //возвращаем значения инпутов
  }

  //вставить данные в инпуты
  setinputValues(data) {
    this._inputs.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues()); //передаем в _callbackSubmitForm собранные в _getInputValues значения инпутов
      //this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setButtonLoading(text) {
    this._saveButton.textContent = text;
  }
}
