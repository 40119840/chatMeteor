
if (Meteor.isClient) {

  //var user = this.params._id
  Template.chat.rendered =function () {
      console.log(this.data)
      var userid = this.data
      Session.set('userid',this.data)
        console.log(Session.get('userid'))

  }


  Template.chat.helpers({
    messages: function() {
    p2 = Session.get('userid')
    p1 = Meteor.user()._id

    var query =  Messages.find({
                    $or: [{
                        from: p1,
                        to: p2
                    }, {
                        to: p1,
                        from: p2
                    }]
                }
                , {
                    sort: {time: +1}
                });

            console.log(p1);
            console.log(p2);
            console.info(query);


    return query;
  },

  getusername: function() {
  p2 = Session.get('userid')
  var username = Meteor.users.findOne(p2).username;
  return username;
},



  userId: function() {
  return Meteor.user()._id
},

});

Template.chat.events = {
  'keydown input#message' : function (event) {
  if (event.which == 13) {
    if (Meteor.user())
    var name = Meteor.user().username;
      else
    var name = 'Unkown User';
    console.log(name);
    var receiver =  Session.get('userid');


    var message = document.getElementById('message');
      if (message.value != '') {
    Messages.insert({
      name: name,
      from: Meteor.user()._id,
      to: receiver,
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
