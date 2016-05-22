import Ember from 'ember';

export default Ember.Controller.extend({
  currentFileData: undefined,
  actions: {
    createSodaBrand() {
        let sodaBrand = this.store.createRecord('soda-brand', {
          name: this.get('brandName'),
          image: this.get('currentFileData')
        });

        let that = this;
        sodaBrand.save().then(function(result) {
          let currentId = result.get('id');
          that.transitionToRoute('sodaBrands.sodaBrand.sodas',
            currentId);
        });
      },
      cancelCreateSodaBrand() {
        this.transitionToRoute('');
      },
      fileLoaded(file) {
        this.set('currentFileData', file.data);
      }
  }
});
