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
    const closeButton = this._popupSelector.querySelector(".popup__close");
    console.log(closeButton);
   closeButton.addEventListener('click', () => {this.close()});
}
}
