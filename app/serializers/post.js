import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    comments: { embedded: 'always' }
  },
  serializeHasMany: function() {
    console.log('here');
    this._super.apply(this, arguments);
  }

});
