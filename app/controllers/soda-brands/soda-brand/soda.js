import Ember from 'ember';

export default Ember.Controller.extend({
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
