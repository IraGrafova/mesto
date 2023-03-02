const formValidationConfig = {
  formSelector: ".card-form",
  inputSelector: ".card-form__input",
  errorClass: "card-form__input_type_error",
  buttonSelector: ".card-form__save",
  buttonDisabledClass: "card-form__save_disabled",
};

//передаем в конструктор конфигурацию и форму
class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  enableValidation() {
    this._addInputListeners(); //добавили обработчики
    this._toggleButton();
  }

  //проверка валидности полей инпутов
  _handleFormInput(item) {
    //получаем в item инпут из перебора массива в слушателе _addInputListeners()
    const inputId = item.id;
    const errorElement = document.querySelector(`#${inputId}-error`);

    if (item.validity.valid) {
      item.classList.remove(this._config.errorClass);
      errorElement.textContent = "";
    } else {
      item.classList.add(this._config.errorClass);
      errorElement.textContent = item.validationMessage;
    }
  }

  // функция переключения состояния кнопки (активна или заблокирована)
  _toggleButton() {
    const buttonSubmit = this._form.querySelector(this._config.buttonSelector);
    const isFormValid = this._form.checkValidity(); //проверяем валидна ли форма методом checkValidity
    buttonSubmit.disabled = !isFormValid; //если форма не валидна, включить disable
    buttonSubmit.classList.toggle(
      this._config.buttonDisabledClass,
      !isFormValid
    );
  }

  //все слушатели
  _addInputListeners() {
    this._form.querySelectorAll(".card-form__input").forEach((item) => {
      //слушатель на инпуты
      item.addEventListener("input", () => {
        this._handleFormInput(item);
      });
      item.addEventListener("input", () => {
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
