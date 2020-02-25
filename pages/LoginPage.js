import { Selector, t} from 'testcafe'
export default class LoginPage{
  constructor(){
      //Login credentials
      this.userEmail = Selector('#spree_user_email')
      this.userPwd = Selector('#spree_user_password')

      //login button
      this.loginButton = Selector('input').withAttribute('value', 'Login')

  }
  async enter_Login_Credentails(spree_user_email, spree_user_password)
  {
    await t
          .typeText(this.userEmail,spree_user_email)
          .typeText(this.userPwd,spree_user_password)
  }


  async click_Login_Button()
  {
    await t.click(this.loginButton)
  }
}