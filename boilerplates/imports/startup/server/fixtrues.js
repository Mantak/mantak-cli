const hasAdmin = Meteor.users.findOne();
if ( !hasAdmin ) {
  const id = Accounts.createUser({
    username: Meteor.settings.private.admin,
    password: Meteor.settings.private.password,
  });
  Roles.addUsersToRoles( id, Meteor.settings.public.role, Meteor.settings.public.group );
}
