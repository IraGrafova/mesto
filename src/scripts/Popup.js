export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._escClose = this._handleEscClose.bind(this);
    this._closeByClickOnOverlay = this._closePopupByClickOnOverlay.bind(this);
  }

  //открытие попапа
  open() {
    this._popupSelector.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._escClose);
  }

  //закрытие попапа
  close() {
    this._popupSelector.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._escClose);
  }

  //функция закрытия попапа по ESC
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // функция закрытия попапа при клике на оверлей
  _closePopupByClickOnOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());
    this._popupSelector.addEventListener(
      "mousedown",
      this._closeByClickOnOverlay
    );
  }
}
