import { Popup } from "./Popup.js";

// const formEdit = document.forms["edit-profile-form"];
// const cardForm = document.forms["card-form"];



export class PopupWithForm extends Popup {
  constructor(popup, {callbackSubmitForm}) {

    (super(popup));

    this._callbackSubmitForm = callbackSubmitForm;
    this._form = this._popup.querySelector('.card-form');
    this._inputs = this._form.querySelectorAll('.card-form__input');
  }

  //получить данные всех полей формы
  _getInputValues() {
    //создадим пустой объект, в который будем помещать данные всех инпутов
      this._inputValues = {};
      this._inputs.forEach(input => { //перебираем все формы
        this._inputValues[input.name] = input.value;  //у каждого inputa есть атрибут name, благодаря такой записи мы создаем объект где свойство это name, а значение это значение inputa.Пример Input с name="job": {job: input.value}
      });
      //console.log(this._inputValues)
      return this._inputValues;  //возвращаем значения инпутов

   }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
      //console.log(this._getInputValues())
      this.close();
    });

  }

  close() {
    super.close();
    this._form.reset();
  }
}
