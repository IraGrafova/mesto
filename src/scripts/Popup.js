export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  //открытие попапа
  open() {
    this._popupSelector.classList.add("popup_is-opened");
  };

  //закрытие попапа
  close() {
    this._popupSelector.classList.remove("popup_is-opened");
  };

  //функция закрытия попапа по ESC
  _handleEscClose() {
    // if (evt.key === "Escape") {
    //   const openedPopup = document.querySelector(".popup_is-opened");
    //   this._close();
    // }
  };

  setEventListeners() {
    const closeButtons = document.querySelectorAll(".popup__close");
    closeButtons.forEach((button) => {
      button.addEventListener("click", this._close);
  });
}
}
