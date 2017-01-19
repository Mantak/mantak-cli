import {Meteor} from 'meteor/meteor';
import _Collection from '../collection';

Meteor.publish('User.all', function() {
  return _Collection.find();
});
