Router.route('chat/:_id', function () {
  this.render('chat', {
    data: function () { console.log(this.params._id); return  this.params._id }
  });
});

Router.route('/', function () {
  if (Meteor.user())
  this.render('userlist');
  else
  this.render('login');
});
