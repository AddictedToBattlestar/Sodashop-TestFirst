import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  beforeModel() {
    if (this.get('router.url') === '/') {
      this.transitionTo('sodaBrands.sodaBrand.sodas', 1);
    }
  },
  model() {
    let returnObj = Ember.RSVP.hash({
      user: {},
      sodaBrands: this.store.findAll('soda-brand')
    });
    let sessionUserId = this.get('session.data.authenticated.userId');
    if (sessionUserId) {
      returnObj.user = this.store.find('user', sessionUserId);
    } 
    return returnObj;
  }
});
