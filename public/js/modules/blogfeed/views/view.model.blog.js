define([
    //libraries
    'backbone',
    
    //template
    'text!modules/blogfeed/templates/blogfeeds.html'
], function(
   //libraries
   backbone,

   //define template as blogfeeds
   blogfeeds
){
  var BlogEntry = Backbone.View.extend({
    template: _.template(blogfeeds),

    initialize: function(){
      this.model.on('change', this.render, this);
    },
    render: function(){
      var tmplData = this.template(this.model.toJSON());
      this.$el.html(tmplData);

      return this;
    },
    events:{
      'click .editPost': 'showEditPost',
      'click .deletePost': 'deletePost',
      'click .saveChangePost': 'savePost',
    },
    showEditPost: function(){
      this.$('.editPostForm').removeAttr('hidden');
      this.$('.blogContent').attr('hidden', 'hidden');
      var title = this.model.get('title'),
          content = this.model.get('content'),
          author = this.model.get('author');
      //use 'this' to point specific record to update
      this.$('.postTitle').val(title);
      this.$('.postAuthor').val(author);
      this.$('.postContent').val(content);
      
    },
    savePost: function(){
      var title = this.$('.postTitle').val(),
          content = this.$('.postContent').val(),
          author = this.$('.postAuthor').val();
      this.model.set('title', title);
      this.model.set('author', author);
      this.model.set('content', content);
      
    },
    deletePost: function(){
      // remove model from collection
       this.model.destroy();
     
      //remove view
      this.remove();
      alert('Blog post entitled ' + '"' + this.model.get('title') + '"' + ' was successfuly deleted.');
    }

  });

  return BlogEntry;
});

