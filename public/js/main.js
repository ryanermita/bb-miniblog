define([
  // Libraries
  'underscore',
  'backbone',
  // Modules
  'modules/blogfeed/route.blogfeed'
],function(
  // Libraries
  _,
  backbone,

  // Modules
  routeBlogFeed
) {
  return Backbone.Router.extend({
    initialize: function() {
     console.log('it works.');   
     new routeBlogFeed();
    },

    routes: {
      '': 'index',    
    },

    index: function() {
      console.log('initial route is working already');
    }
  });
});
