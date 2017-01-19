import {Meteor} from 'meteor/meteor';
import _Collection from '../collection';

Meteor.publish('Hello.all', function() {
  return _Collection.find();
});
