define([
    //libraries
    'backbone',

    //extends model.
    'modules/blogfeed/models/model.blog'
], function(
   //libraries
   backbone,
   
   //define model as 'blog'
   blog
){
 var Blogs = Backbone.Collection.extend({
   //collection of blog model
   model: blog
 });
  return Blogs;
});
