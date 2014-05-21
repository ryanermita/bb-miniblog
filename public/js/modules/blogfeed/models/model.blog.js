define([
    //libraries
    'backbone'
], function(
   //libraries
   backbone
){
 var Blog= Backbone.Model.extend({
   //definne model attributes
   defaults: {
     title: '',
     content: '',
     author: ''
   }
 });
  return Blog;
});
