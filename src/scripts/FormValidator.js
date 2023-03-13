import { formValidationConfig } from "./index.js";

//передаем в конструктор конфигурацию и форму
class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._buttonSubmit = this._form.querySelector(this._config.buttonSelector);
  }

  enableValidation() {
    this._addInputListeners(); //добавили обработчики
    this._toggleButton();
  }

  //скрыть сообщение об ошибке
  _hideInputError(item) {
    this._inputId = item.id;
    this._errorElement = this._form.querySelector(`#${this._inputId}-error`);
    item.classList.remove(this._config.errorClass);
    this._errorElement.textContent = "";
  }

  //показать сообщение об ошибке
  _showInputError(item) {
    this._inputId = item.id;
    this._errorElement = this._form.querySelector(`#${this._inputId}-error`);
    item.classList.add(this._config.errorClass);
    this._errorElement.textContent = item.validationMessage;
  }

  //проверка валидности полей инпутов
  _handleFormInput(item) {
    //получаем в item инпут из перебора массива в слушателе _addInputListeners()
    if (item.validity.valid) {
      this._hideInputError(item);
    } else {
      this._showInputError(item);
    }
  }

  // функция переключения состояния кнопки (активна или заблокирована)
  _toggleButton() {
    const isFormValid = this._form.checkValidity(); //проверяем валидна ли форма методом checkValidity
    this._buttonSubmit.disabled = !isFormValid; //если форма не валидна, включить disable
    this._buttonSubmit.classList.toggle(
      this._config.buttonDisabledClass,
      !isFormValid
    );
  }

  //все слушатели
  _addInputListeners() {
    this._form.querySelectorAll(this._config.inputSelector).forEach((item) => {
      //слушатель на инпуты
      item.addEventListener("input", () => {
        this._handleFormInput(item);
        this._toggleButton();
      });
    });
    //слушатель на перезагрузку кнопки
    this._form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton();
      }, 0);
    });
  }
}

export { formValidationConfig, FormValidator };
