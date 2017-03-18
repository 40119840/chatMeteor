
if (Meteor.isClient) {
  Template.chat.helpers({
    messages: function() {
    return Messages.find({}, { sort: { time: -1}});
  }
}); }
