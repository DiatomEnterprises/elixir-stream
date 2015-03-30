ElixirStream.EntriesShowRoute = Ember.Route.extend({
  model: function(params) {
    var self = this;

    return this.store.find("entry", params.entry_id).then(
      null,
      function() {
        return self.transitionTo("error404");
      }
    );
  },

  actions: {
    updateTitle: function(tokens) {
      var title = this.get("currentModel.title");
      tokens.push(title);
      return true;
    }.observes("currentModel.title")
  }
});
