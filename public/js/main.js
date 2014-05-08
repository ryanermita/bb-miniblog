define([
  // Libraries
  'underscore',
  'backbone'
],function(
  // Libraries
  _,
  backbone
) {
  return Backbone.Router.extend({
    initialize: function() {
     console.log('it works.');   
    },

    routes: {
      '': 'index',    
    },

    index: function() {
      console.log('initial route is working already');
    }
  });
});
