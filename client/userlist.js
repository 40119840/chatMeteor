if (Meteor.isClient) {
  Template.userlist.helpers({
    user: function() {
    //return Messages.find({}, { sort: { time: -1}});
    return Meteor.users.find();
  },
  userEmail: function(){
    return this.emails[0].address;
  }
}); }
