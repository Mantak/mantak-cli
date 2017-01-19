import { SSR } from 'meteor/meteorhacks:ssr';
import { Accounts } from 'meteor/accounts-base';

SSR.compileTemplate('htmlEmail', Assets.getText('email/reset_password.html'));

Accounts.emailTemplates.resetPassword = {
  subject() {
    return '[公司名称] 记住您的新密码';
  },

  html( user, url ) {
    const emailData = {
      name: user.username,
      emailAddress: user.emails[0].address,
      urlWithoutHash: url.replace( '#/', '' ),
    };
    return  SSR.render('htmlEmail', emailData);
  }
};
