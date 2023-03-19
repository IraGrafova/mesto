export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._escClose = this._handleEscClose.bind(this);
    this._closeByClickOnOverlay = this._closePopupByClickOnOverlay.bind(this);
  }

  //открытие попапа
  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._escClose);
  }

  //закрытие попапа
  close() {
    this._popup.classList.remove("popup_is-opened");
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
    this._popup
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());
    this._popup.addEventListener(
      "mousedown",
      this._closeByClickOnOverlay
    );
  }
}
