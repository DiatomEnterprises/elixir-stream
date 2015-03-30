ElixirStream.SigninController = Ember.Controller.extend(SimpleAuth.LoginControllerMixin, {
  authenticator: "simple-auth-authenticator:oauth2-password-grant",

  signinFailed: false,

  actions: {
    clearWarning: function() {
      this.set("signinFailed", false);
    }
  }
});
