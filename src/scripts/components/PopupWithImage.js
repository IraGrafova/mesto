import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImageSrc = this._popup.querySelector(".popup__image");
    this._popupImageName = this._popup.querySelector(".popup__caption");
  }

  //метод получает данные link и name из класса Card с помощью функции handleCardClick(link, name)
  openImagePopup(link, name) {
    super.open();
    this._popupImageSrc.src = link;
    this._popupImageName.alt = name;
    this._popupImageName.textContent = name;
  }
}
