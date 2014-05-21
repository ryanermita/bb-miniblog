define([
    //libraries
    'backbone',

    //extend blog model and collection.
    'modules/blogfeed/collections/collection.blog',
    'modules/blogfeed/views/view.model.blog' ],
function(
   //libraries
   backbone,

   //define collection as blogs.
   //define model as posts.
   blogs, posts
){
  var blogData = [];

  var BlogFeed = Backbone.View.extend({
    //wrap models in 'ul' tag.
    tagName: 'ul',
    // define to use existing element on the page.
    el: 'body',
    initialize: function(){
      //bind collection on add event,
      //so whenener a new record added render will follow.
      this.collection.on('add', this.render, this);
    },
    render: function(){
      //iterate collection to render in our view
      this.collection.each(function(post){
        var elPosts = new posts({model: post}).render().el;
        this.$el.append(elPosts); 
      }, this);
      return this;
    },
    events:{
      //event element: function
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
