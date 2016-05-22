import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandsController: Ember.inject.controller('sodaBrands'),
  sodaBrandsModel: Ember.computed.reads('sodaBrandsController.model'),
  actions: {
    returnToSodaListing() {
        this.transitionToRoute('sodaBrands.sodaBrand.sodas');
      },
      beginEditSoda() {
        this.transitionToRoute('sodaBrands.sodaBrand.soda', {
          queryParams: {
            edit: true
          }
        });
      }
  }
});
