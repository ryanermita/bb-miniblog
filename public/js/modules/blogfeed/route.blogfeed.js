define([
    //libraries
    'backbone',

    //view
    'modules/blogfeed/views/view.collection.blog'
], function(
  //libraries
  backbone,
  blogs
){
  BlogFeed = Backbone.Router.extend({
    initialize: function(){
      console.log('Blog Feed route is working.');
      $('body').append(blogs.render().el);
    }
  });

  return BlogFeed;
});
