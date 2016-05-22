import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('router.url') === '/') {
      this.transitionTo('sodaBrands.sodaBrand.sodas', 1);
    }
  }
});
