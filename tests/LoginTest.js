import Data from '../testData/Data.js'
import HomeImpl from '../implementations/HomeImpl.js'
import LoginImpl from '../implementations/LoginImpl.js'
import ValidationMessages from '../testData/ValidationMessages.js'

const data = new Data()
const message = new ValidationMessages()
const homeImpl = new HomeImpl()
const loginImpl = new LoginImpl()

fixture `Signing with valid credentials`
    .page("http://spree-vapasi-prod.herokuapp.com/")
    .before( async ctx => {
        ctx.user_email = data.user_email
        ctx.user_pwd = data.user_pwd
        ctx.success_msg = message.success_msg
        })


 test('Existing user logs in with valid credentials', async t => {
    await loginImpl.existing_user_login(t.fixtureCtx.user_email, t.fixtureCtx.user_pwd)
    await homeImpl.verify_successful_signin(t.fixtureCtx.success_msg)
  });

//test
//  .before( async t => {
//   t.fixtureCtx.new_user_personal_info.password = t.fixtureCtx.new_user_personal_info.password + Util.randomString(3)
//    })
//    ('User logs in with invalid credentials', async t => {
//      await authenticationImpl.existing_user_login(t.fixtureCtx.new_user_personal_info.email, t.fixtureCtx.new_user_personal_info.password)
//      Util.verify_error_text(message.error_messages.authentication_failed_message)
//    })
