export class Section {
  constructor({ items, renderer, api }, selector) { // items не нужен
    //this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
    this._api = api;
  }


  //сохранить новую карточку, а потом добавить в DOM
  saveNewCard(data) {
    console.log(data)
    console.log(this._api)
    this._api
    .saveCard({//вызываем метод saveCard из класса Api
      name: data.name,
      link: data.link
    })
    .then(data => this.addItem(data))
    .catch((err) => console.log(err))
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
