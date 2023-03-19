

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
        description: this._description.textContent
      };
      // console.log(userInfo)
        return userInfo;

    }

    setUserInfo(inputValues) { //получает объект с ключами и устанавливает их в разметку
    // console.log(inputValues.name)
     //console.log(this.getUserInfo)
     this._profileName.textContent = inputValues.name;
     this._description.textContent = inputValues.description;
    }
}
