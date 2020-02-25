import HomePage from '../pages/HomePage.js'
import LoginPage from '../pages/LoginPage.js'
import Data from '../testdata/Data.js'

const homePage = new HomePage()
const loginPage = new LoginPage()

export default class LoginImpl{
  constructor(){}

  async existing_user_login(username, password){
    await homePage.click_signin_link()
    await loginPage.enter_Login_Credentails(username, password)
    await loginPage.click_Login_Button()
  }
}