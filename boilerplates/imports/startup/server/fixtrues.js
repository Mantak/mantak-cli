import { Accounts } from 'meteor/accounts-base';
const hasAdmin = Meteor.users.findOne();
if ( !hasAdmin ) {
  const user = {
    email: Meteor.settings.private.originUser.email,
    username: Meteor.settings.private.originUser.username,
    password: Meteor.settings.private.originUser.password,
  };
  const id = Accounts.createUser(user);
  Roles.addUsersToRoles( id, Meteor.settings.public.role, Meteor.settings.public.group );
  Accounts.sendVerificationEmail( id );
}
