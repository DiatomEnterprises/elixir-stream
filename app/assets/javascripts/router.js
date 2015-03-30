ElixirStream.Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.route('about');
  this.resource("account");

  this.resource('entries', function() {
    this.route("show", { path: "/:entry_id" });
    this.route("new");
  });

  this.route("error404");
  this.route("missing", { path: "/*path" });
});

ElixirStream.Router.reopen({
  location: "history",

  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition'),

  updateTitle: function() {
    this.send('updateTitle', []);
  }.on('didTransition')
});
