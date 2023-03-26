export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.profileNameSelector); //'.profile-info__title'
    this._description = document.querySelector(data.descriptionSelector); //'.profile-info__subtitle'
    this._avatar = document.querySelector(data.avatarSelector);
   this._api = data.api;
    //console.log(this._api.name)
  }

_saveUserInfo({data}) {
  this._api
  .editUserInfo({name: data.name})
  .then(data => this.setUserInfo(data))
  .catch((err) => console.log(err))
}

  getUserInfo() {
    // собирает значения в объект
    //текст контент разметки html должен передаться в инпут
    const userInfo = {
      name: this._profileName.textContent,
      description: this._description.textContent,
    };

    return userInfo;
  }

  setUserInfo(data) {
    //получает объект с ключами из index.js и устанавливает их в разметку
    // this._profileName.textContent = this._api.name;
    // this._description.textContent = this._api.about;
    // this._avatar.src = this._api.avatar;
   console.log(data.name)
    this._profileName.textContent = data.name;
    this._description.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
