export class Api {
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllCards() {
   return fetch(this._url, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    })
  }

  addCard(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    })
  }

  getUserInfo() {
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    })
  }

  //данный метод вызывается в UserInfo _saveUserInfo({data})
  editUserInfo(data) {
    console.log(data)
    return fetch(this._url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    })
  }

}

