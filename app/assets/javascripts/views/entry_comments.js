ElixirStream.EntryCommentsView = Ember.View.extend({
  elementId: 'disqus_thread',
  tagName: 'div',

  didInsertElement: function () {
    var id = this.get('entry.id'),
        title = this.get('entry.title');

    if (window.DISQUS) {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = id;
          this.page.title = title;
          this.page.url = window.location.toString();
        }
      });
    } else {
      var disqus_shortname = 'elixirstream';
    
      (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
    }
  }
});