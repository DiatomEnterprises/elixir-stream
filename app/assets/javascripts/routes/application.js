ElixirStream.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationFailed: function() {
      this.controllerFor("signin").set("signinFailed", true);
    },

    updateTitle: function(tokens) {
      if (tokens.length) {
        document.title = tokens.join(' - ') + " - ElixirStream";
      } else {
        document.title = "ElixirStream - Community driven place for all things Elixir";
      }
    }
  }
});
