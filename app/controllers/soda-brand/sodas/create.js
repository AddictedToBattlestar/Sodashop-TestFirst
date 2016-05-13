import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandController: Ember.inject.controller('sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  currentFileData: undefined,
  actions: {
    createSoda() {
        console.log("createSoda");
        let soda = this.store.createRecord('soda', {
          name: this.get('name'),
          cost: this.get('cost'),
          description: this.get('description'),
          image: this.get('currentFileData')
        });

        let that = this;
        let selectedSodaBrand = this.get('sodaBrandModel.sodaBrand');
        soda.set('sodaBrand', selectedSodaBrand);
        soda.save().then(function() {
          that.transitionToRoute('soda-brand.sodas');
        });
      },
      cancelCreateSoda() {
        this.transitionToRoute('soda-brand.sodas');
      },
      fileLoaded(file) {
        this.set('currentFileData', file.data);
      }
  }
});
