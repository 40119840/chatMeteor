if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function() {
    return Messages.find({}, { sort: { time: -1}});
  }
  });

  Template.input.events = {
    'keydown input#message' : function (event) {
    if (event.which == 13) {
      if (Meteor.user())
      var name = Meteor.user().emails[0].address;
        else
      var name = 'Unkown User';
      var receiver = document.getElementById('receiver');
      var message = document.getElementById('message');
        if (message.value != '') {
      Messages.insert({
        name: name,
        from: Meteor.userId,
        to: receiver.value,
      message: message.value,
      time: Date.now(),
          });

          document.getElementById('message').value = '';
          message.value = '';
        }
      }
    }
  }
}