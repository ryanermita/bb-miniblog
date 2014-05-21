define([
    //libraries
    'backbone',
    'modules/blogfeed/collections/collection.blog',
    'modules/blogfeed/views/view.model.blog' ],
function(
   //libraries
   backbone,
   blogs, posts
){
  var blogData = [];

  var BlogFeed = Backbone.View.extend({
    tagName: 'ul',
    el: 'body',
    initialize: function(){
      this.collection.on('add', this.render, this);
    },
    render: function(){
      this.collection.each(function(post){
        var elPosts = new posts({model: post}).render().el;
        this.$el.append(elPosts); 
      }, this);
      return this;
    },
    events:{
      'click #addPost': 'addPost',
      'click #showAddPost': 'showAddPost'
    },
    addPost: function(){
      console.log('add me');
      var title = this.$('#addTitle').val(),
          author = this.$('#addAuthor').val(),
          content = this.$('#addContent').val();
      this.collection.add({'title': title, 'author': author, 'content': content});
      this.$('#addPostForm').attr('hidden', 'hidden');
      this.$('.blogfeed').removeAttr('hidden');
      console.log(title + author + content);
    },
    showAddPost: function(){
      console.log('show add form');
      this.$('#addTitle').val(''),
      this.$('#addAuthor').val(''),
      this.$('#addContent').val('');
      this.$('#addPostForm').removeAttr('hidden');
      this.$('.blogfeed').attr('hidden', 'hidden');
    }
  });
 return new BlogFeed({collection: new blogs(blogData)});
});
