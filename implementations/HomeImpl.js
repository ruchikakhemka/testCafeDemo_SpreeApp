import HomePage from '../pages/HomePage.js'
const homePage = new HomePage()

export default class HomeImpl{
  constructor(){}

async user_sign_in(){
    await homePage.click_signin_link()
  }
async verify_successful_signin(successmessage){
     await homePage.verify_successful_signin(successmessage)
   }
 }