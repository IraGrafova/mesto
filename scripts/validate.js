const formValidationConfig = {
  formSelector: '.card-form',
  inputSelector: '.card-form__input',
  errorClass: 'card-form__input_type_error',
  buttonSelector: '.card-form__save',
  buttonDisabledClass: 'card-form__save_disabled'
}


function enableValidation(config) {
  const form = document.querySelectorAll(config.formSelector);
  form.forEach((item) => {

    item.addEventListener('input', () => {
      toggleButton(item, config)
    })
  addInputListeners(item, config);
  toggleButton(item, config);
   })
  }

/**
 * обработать ввод в инпут
 * @param {*} event
 * @param {*} config
 */
function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity(); //проверяем валидна ли форма методом checkValidity
  buttonSubmit.disabled = !isFormValid; //если форма не валидна, включить disable
  buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);
}



function addInputListeners(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector)

  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config)
    });
  });
};

enableValidation(formValidationConfig);
