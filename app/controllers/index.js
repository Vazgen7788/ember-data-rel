import Ember from 'ember';

export default Ember.Controller.extend({

  id: 0,

  commentId: 0,

  actions: {
    addPost(title, body) {

      this.get('store').pushPayload('post', {
        post: [{
          id: this.incrementProperty('id'),
          title,
          body,
          comments: [{
            id: this.incrementProperty('commentId'),
            body: 'comment body 1'
          },{
            id: this.incrementProperty('commentId'),
            body: 'comment body 2'
          },{
            id: this.incrementProperty('commentId'),
            body: 'comment body 3'
          }]
        }]
      });

      this.set('postTitle', '');
      this.set('postBody', '');

    },

    deletePost(post) {
        // WANT TO UNLOAD POST WITH COMMENTS
        // This is a simple example in real project it is a deepest relations in the world :D 
        this.get('store').unloadRecord(post);
    }
  }

});
