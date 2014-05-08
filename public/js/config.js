(function(){
  var root = this,
      publicLib = '/public/js/lib/';

  require.config({
    baseUrl: '/public/js',
    paths: {
      underscore: publicLib + 'underscore',
      backbone: publicLib + 'backbone',
      text: publicLib + 'text',
      jquery: publicLib + 'jquery'
    },
    shim: {
      underscore: {exports: '_'},
      backbone: {deps: ['underscore', 'jquery'], exports: 'Backbone'}
    }
  });
  
  require(['main'], function(app){
    new app();

    Backbone.history.start({pushState: true});

    $(document).on('click', 'a[ahref]:not([data-bypass])', function(evt){
      //Get absolute anchor href
      var href = {prop: $(this).prop('href'), attr: $(this).attr('href')},

      //Get absolute root
      root = location.protocol + '//' + location.host;

      // Ensure the root is part of the anchor href, meaning its relative.
      if (href.prop.slice(0, root.length) === root){
        evt.preventDefault();

        Backbone.history.navigatr(href.attr, true);
      }
    });
  });
})();


