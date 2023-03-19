export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.profileNameSelector); //'.profile-info__title'
    this._description = document.querySelector(data.descriptionSelector); //'.profile-info__subtitle'
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

  setUserInfo(inputValues) {
    //получает объект с ключами из index.js и устанавливает их в разметку
    this._profileName.textContent = inputValues.name;
    this._description.textContent = inputValues.description;
  }
}