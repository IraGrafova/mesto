//import { initialCards } from './constans.js';

export class Section {
  constructor({items, renderer}, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  //добавить карточку в DOM
  addItem(element) {
    this._container.prepend(element);
     //console.log(element)
  }

  //отрисовка всех элементов
  renderItems() {
    //console.log(this._items);
    //console.log(this._container);
    // const renderCard = (item) => {
    //   const card = this._renderer(item);
    //   this.addItem(item); //вызываем метод addItem - добавляем карточку в DOM

    // };
    //перебираем массив готовых карточек и вызываем renderCard для каждой карточки
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }


}
