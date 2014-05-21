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
   blogs,
   posts
){
   var blogData = [
    {
      title: 'The Amazing BackboneJS',
      content: ['Lorem ipsum dolor sit amet, usus laoreet', 
      'quis congue videntur nostrud. Erat elit', 
      'non vel esse legentis parum per sequitur.', 
      'Cum, me assum ullamcorper eu nibh velit. ',
      'Ut blandit, euismod in, et tincidunt quod,',  
      'at. Iriure ad fiant ipsum est litterarum typi',  
      'sit consuetudium clari saepius. Sollemnes, eodem ', 
      'claritas ipsum feugiat legere id nunc, iusto. ',
      'Sequitur eua aliquam lobortis volutpat vulputate',  
      'te, nulla veniam. Augue typi adipiscing claritatem',  
      'lectorum insitam. Anteposuerit illum ii ex odio ',
      'lorem te nostrud enim. Seacula me nunc congue.',
      'Autem diam nulla quarta est. Vero nibh placerat non hendrerit.',
      'ssim typi, facilisi, veniam, eum, augue facit,', 
      'decima at ad, dolor. Molestie cum, duis wisi futurum ',
      'videntur consequat quis eua. Legunt et eu quod. Nostrud', 
      'sollemnes nunc, illum id claritatem. Clari, commodo quarta i',
      'congue, etiam modo ii mirum in, iusto eum.',
      'Anteposuerit seacula ex, te, sit me quarta quod, per est', 
      'assum autem. Vero luptatum eodem non nulla notare erat nam', 
      'congue accumsan ipsum. At mazim ad veniam vel velit tincidunt', 
      'diam. Cum eua et saepius tempor legere legentis eleifend eu',
      'esse, vero. Sollemnes odio, id nostrud ii usus legunt in', 
      'possim. Ex seacula exerci te liber me est magna luptatum', 
      'euismod consuetudium.'],
      author: 'John Doe'
    },
    {
      title: 'Ryan Learning BackboneJS',
      content: ['Lorem ipsum dolor sit amet, usus laoreet', 
      'quis congue videntur nostrud. Erat elit', 
      'non vel esse legentis parum per sequitur.', 
      'Cum, me assum ullamcorper eu nibh velit. ',
      'Ut blandit, euismod in, et tincidunt quod,',  
      'at. Iriure ad fiant ipsum est litterarum typi',  
      'sit consuetudium clari saepius. Sollemnes, eodem ', 
      'claritas ipsum feugiat legere id nunc, iusto. ',
      'Sequitur eua aliquam lobortis volutpat vulputate',  
      'te, nulla veniam. Augue typi adipiscing claritatem',  
      'lectorum insitam. Anteposuerit illum ii ex odio ',
      'lorem te nostrud enim. Seacula me nunc congue.',
      'Autem diam nulla quarta est. Vero nibh placerat non hendrerit.',
      'ssim typi, facilisi, veniam, eum, augue facit,', 
      'decima at ad, dolor. Molestie cum, duis wisi futurum ',
      'videntur consequat quis eua. Legunt et eu quod. Nostrud', 
      'sollemnes nunc, illum id claritatem. Clari, commodo quarta i',
      'congue, etiam modo ii mirum in, iusto eum.',
      'Anteposuerit seacula ex, te, sit me quarta quod, per est', 
      'assum autem. Vero luptatum eodem non nulla notare erat nam', 
      'congue accumsan ipsum. At mazim ad veniam vel velit tincidunt', 
      'diam. Cum eua et saepius tempor legere legentis eleifend eu',
      'esse, vero. Sollemnes odio, id nostrud ii usus legunt in', 
      'possim. Ex seacula exerci te liber me est magna luptatum', 
      'euismod consuetudium.'],
      author: 'Ryan Jayson Ermita'
    },
    {
      title: 'Awesome BackboneJS!',
      content: ['Lorem ipsum dolor sit amet, usus laoreet', 
      'quis congue videntur nostrud. Erat elit', 
      'non vel esse legentis parum per sequitur.', 
      'Cum, me assum ullamcorper eu nibh velit. ',
      'Ut blandit, euismod in, et tincidunt quod,',  
      'at. Iriure ad fiant ipsum est litterarum typi',  
      'sit consuetudium clari saepius. Sollemnes, eodem ', 
      'claritas ipsum feugiat legere id nunc, iusto. ',
      'Sequitur eua aliquam lobortis volutpat vulputate',  
      'te, nulla veniam. Augue typi adipiscing claritatem',  
      'lectorum insitam. Anteposuerit illum ii ex odio ',
      'lorem te nostrud enim. Seacula me nunc congue.',
      'Autem diam nulla quarta est. Vero nibh placerat non hendrerit.',
      'ssim typi, facilisi, veniam, eum, augue facit,', 
      'decima at ad, dolor. Molestie cum, duis wisi futurum ',
      'videntur consequat quis eua. Legunt et eu quod. Nostrud', 
      'sollemnes nunc, illum id claritatem. Clari, commodo quarta i',
      'congue, etiam modo ii mirum in, iusto eum.',
      'Anteposuerit seacula ex, te, sit me quarta quod, per est', 
      'assum autem. Vero luptatum eodem non nulla notare erat nam', 
      'congue accumsan ipsum. At mazim ad veniam vel velit tincidunt', 
      'diam. Cum eua et saepius tempor legere legentis eleifend eu',
      'esse, vero. Sollemnes odio, id nostrud ii usus legunt in', 
      'possim. Ex seacula exerci te liber me est magna luptatum', 
      'euismod consuetudium.'],
      author: 'Ryan Ermita'
    },
  ]; 
   var BlogFeed = Backbone.View.extend({ //wrap models in 'ul' tag.
     tagName: 'ul',
     // define to use existing element on the page.
     el: 'body',
     initialize: function(){
       //bind collection on add event,
       //so whenener a new record added render will follow.
       this.collection.on('add', this.addNewPost, this);
     },
     render: function(){
       //iterate collection to render in our view
       this.collection.each(function(post){
         this.addNewPost(post);
       }, this);
       return this;
     },
     addNewPost: function(post){
       var elPosts = new posts({model: post}).render().el;
       this.$el.append(elPosts); 
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
