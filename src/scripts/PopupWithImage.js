import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    console.log(popupSelector)
  }

  //метод получает данные link и name из класса Card с помощью функции handleCardClick(link, name)
  openImagePopup(link, name) {
    console.log(super.open);

    // const openPopupWithImage = super.open();
    // super.popupSelector.src = link;
    // super.popupSelector.alt = name;
    // super.popupSelector.textContent = name;
    // openPopupWithImage();
    // //console.log(openPopupWithImage)
  }
  }
