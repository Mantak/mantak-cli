import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const _Modle = Class.create({
  name: 'Hello',
  collection:  new Mongo.Collection('hellos'),
  fields: {

  }
});
export default _Modle;
