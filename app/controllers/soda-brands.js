import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  applicationModel: Ember.computed.reads('applicationController.model'),
  actions: {
    transitionToSodaBrand(sodaBrand) {
        this.transitionToRoute('sodaBrands.sodaBrand.sodas', sodaBrand.id);
      }
  }
});
