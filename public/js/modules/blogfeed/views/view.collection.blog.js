define([
    //libraries
    'backbone',
    'modules/blogfeed/collections/collection.blog',
    'modules/blogfeed/views/view.model.blog'
], function(
   //libraries
   backbone,
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
      title: 'This is a sample post',
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
      author: 'Tonyeta Filingercia'
    },
    {
      title: 'Im learning backboneJS! AWESOME!',
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
    }
  ];

  var BlogFeed = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
    },
    render: function(){
      this.collection.each(function(post){
        var elPosts =   new posts({model: post}).render().el;
        this.$el.append(elPosts); 
      }, this);
      return this;
    }
  });
 return new BlogFeed({collection: new blogs(blogData)});
});
