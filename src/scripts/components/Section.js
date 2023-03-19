export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  //добавить карточку в DOM
  addItem(element) {
    this._container.prepend(element);
  }

  //отрисовка всех элементов
  renderItems() {
    //перебираем массив готовых карточек и вызываем renderCard для каждой карточки
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
