import { Accounts } from 'meteor/accounts-base';

process.env.MAIL_URL = 'smtp://' +
  encodeURIComponent(Meteor.settings.private.mailgun.login) + ':' +
  encodeURIComponent(Meteor.settings.private.mailgun.password) + '@' +
  encodeURIComponent('smtp.mailgun.org') + ':' + 587;

Accounts.emailTemplates.siteName = Meteor.settings.private.email.siteName;
Accounts.emailTemplates.from     = Meteor.settings.private.email.siteEmail;
