import { SSR } from 'meteor/meteorhacks:ssr';
import { Accounts } from 'meteor/accounts-base';

SSR.compileTemplate('htmlEmail', Assets.getText('email/verify_email.html'));

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[公司名称] Verify Your Email Address';
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
