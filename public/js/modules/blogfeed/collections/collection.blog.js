define([
    //libraries
    'backbone',
    'modules/blogfeed/models/model.blog'
], function(
   //libraries
   backbone,
   blog
){
 var Blogs = Backbone.Collection.extend({
   model: blog
 });
  return Blogs;
});
