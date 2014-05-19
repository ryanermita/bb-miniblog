define([
    //libraries
    'backbone'
], function(
   //libraries
   backbone
){
 var Blog= Backbone.Model.extend({
   defaults: {
     title: '',
     content: '',
     author: ''
   }
 });
  return Blog;
});
