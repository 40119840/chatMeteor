Router.route('chat/:_id', function () {
  this.render('chat', {
    data: function () { return  this.params._id }
  });
});

Router.route('/', function () {
  if (Meteor.user())
  this.render('userlist');
  else
  this.render('login');
});
