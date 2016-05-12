import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  applicationModel: Ember.computed.reads('applicationController.model'),
  actions: {
    returnToSodaListing() {
        this.transitionToRoute('soda-brand.sodas');
      },
      beginEditSoda() {
        this.transitionToRoute('soda-brand.soda', {
          queryParams: {
            edit: true
          }
        });
      }
  }
});
