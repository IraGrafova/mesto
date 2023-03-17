

export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.profileNameSelector); //'.profile-info__title'
    this._description = document.querySelector(data.descriptionSelector); //'.profile-info__subtitle'

  }

    getUserInfo() {
      //текст контент объекта должен передаться в инпут
      const userInfo = {
        name: this._profileName.textContent,
        description: this._description.textContent
      };
        return userInfo;
    }

    setUserInfo({userInfo}) { //получает объект с ключами и устанавливает их в разметку
      this._userInfo.name.textContent = userInfo.name;
      this._userInfo.description = userInfo.description;
    }
}
