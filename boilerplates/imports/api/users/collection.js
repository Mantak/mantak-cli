import { Class } from 'meteor/jagi:astronomy';

const Email = Class.create({
  name: 'Email',
  fields: {
    'address': String,
    'verified': Boolean,
  },
});


const User = Class.create({
  name:       'User',
  collection: Meteor.users,
  fields:     {
    username: {
      type:     String,
      optional: true,
    },
    emails: {
      type:     [Email],
      optional: true,
    },
    services: {
      type:     Object,
      optional: true,
    },
    roles: {
      type:     Object,
      optional: true,
    },
    createdAt: Date,
  },
});

export default User;
