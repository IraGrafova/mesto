export class Api {
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllCards() {
   return fetch(`${this._url}/cards`, {
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

  saveCard(data) {
    return fetch(`${this._url}/cards`, {
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
    return fetch(`${this._url}/users/me`, {
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
    return fetch(`${this._url}/users/me`, {
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

  editAvatar(data) {
    //console.log(data)
    return fetch(`${this._url}/users/me/avatar`, {
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

  putLike(idCard) {
    //console.log(data)
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    })
  }
}

