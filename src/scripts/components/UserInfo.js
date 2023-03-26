export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.profileNameSelector); //'.profile-info__title'
    this._description = document.querySelector(data.descriptionSelector); //'.profile-info__subtitle'
    this._avatar = document.querySelector(data.avatarSelector);
    this._api = data.api;
    console.log(this._api.name)
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

  setUserInfo() {
    //получает объект с ключами из index.js и устанавливает их в разметку
    this._profileName.textContent = this._api.name;
    this._description.textContent = this._api.about;
    this._avatar.src = this._api.avatar;
  }
}
