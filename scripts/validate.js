const formValidationConfig = {
  formSelector: '.card-form',
  inputSelector: '.card-form__input',
  errorClass: 'card-form__input_type_error'
}


function enableValidation(config) {
  const form = document.querySelectorAll(config.formSelector);
  form.forEach((item) => {

addInputListeners(item, config);
   })
  }

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

function addInputListeners(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector)

  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config)
    });
  });
};

enableValidation(formValidationConfig);
