import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'links.insert': function(url) {
    console.log('save: ', url);
  }
})
export const Links = new Mongo.Collection('links');
