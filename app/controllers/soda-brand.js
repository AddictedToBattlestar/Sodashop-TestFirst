import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    returnToSodaBrand() {
      this.transitionToRoute('soda-brand.sodas');
    }
  }
});
