// создаем объект с данными форм
const formValidationConfig = {
  formSelector: ".card-form",
  inputSelector: ".card-form__input",
  errorClass: "card-form__input_type_error",
  buttonSelector: ".card-form__save",
  buttonDisabledClass: "card-form__save_disabled",
};

// запускаем валидацию, перебираем формы и для каждой запускаем 3 функции
// (переключить состояние кнопки при открытии попапа, слушатель на инпуты, состояние кнопки при вводе данных в инпуты)  )
function enableValidation(config) {
  const form = document.querySelectorAll(config.formSelector);
  form.forEach((item) => {
    item.addEventListener("input", () => {
      toggleButton(item, config);
    });
    addInputListeners(item, config);
    toggleButton(item, config);
  });
}

// функция валидности данных инпутов
function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = "";
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

// функция переключения состояния кнопки (активна или заблокирована)
function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity(); //проверяем валидна ли форма методом checkValidity
  buttonSubmit.disabled = !isFormValid; //если форма не валидна, включить disable
  buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);
}

// вешаем слушатель на инпуты
function addInputListeners(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  inputList.forEach(function (item) {
    // проверяем валидна ли форма при вводе каждого символа
    item.addEventListener("input", (event) => {
      handleFormInput(event, config);
    });
    // проверяем валидна ли форма при нажатии на Enter и выполняем функцию сохранения новой карточки
    item.addEventListener("keydown", (evt) => {
      if (handleFormInput(evt, config) && evt.key === "Enter") {
        cardFormSubmit(evt);
      }
    });
  });
}

// передаем функции включения валидации данные из объекта
enableValidation(formValidationConfig);
