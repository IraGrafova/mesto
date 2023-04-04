export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.profileNameSelector); //'.profile-info__title'
    this._description = document.querySelector(data.descriptionSelector); //'.profile-info__subtitle'
    this._avatar = document.querySelector(data.avatarSelector);
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
    this._profileName.textContent = data.name;
    this._description.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
