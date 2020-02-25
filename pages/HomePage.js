import { Selector, t} from 'testcafe'
export default class HomePage{
  constructor(){
       //Sign In Link
      this.signInlink = Selector('#link-to-login')
      //Welcome typeText
      this.loginsuccess = Selector('div').withText('Logged in successfully')
  }
  async click_signin_link(){
      await t.click(this.signInlink)
    }
  async verify_successful_signin(successmessage){
      await t.expect(this.loginsuccess.value).eql(successmessage)
    }
  }