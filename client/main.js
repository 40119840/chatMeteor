
if (Meteor.isClient) {

  Accounts.ui.config({
passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.loginWithFacebook({
    requestPermissions: ['email', 'user_birthday', 'user_location']
}, function(error){loginCallBack(error);});

}
