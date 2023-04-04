export class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  //добавить карточку в DOM
  addItem(element) {
    this._container.prepend(element);
  }

  //отрисовка всех элементов
  renderItems(data) {
    //перебираем массив готовых карточек и вызываем renderCard для каждой карточки
    data.forEach((item) => {
      this._renderer(item);
    });
  }
}
