import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import _Collection from '../collection';

Meteor.methods({
  'User.exsistedEmail'(email) {
    console.log(email);
    return true;
    // return Accounts.findUserByEmail(email);
  },
  'User.exsistedUsername'(username) {
    console.log(Accounts.findUserByUsername(username));
    return Accounts.findUserByUsername(username);
  },
  'User.create'() {
  },
  'User.delete'() {
  },

  'User.sendVerificationLink'() {
    const userId = Meteor.userId();
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  },
});
