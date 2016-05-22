import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model() {
    let sessionUserId = this.get('session.data.authenticated.userId');
    if (sessionUserId) {
      return Ember.RSVP.hash({
        user: this.store.find('user', sessionUserId),
        sodaBrands: this.store.findAll('soda-brand')
      });
    }  else {
      return Ember.RSVP.hash({
        user: {},
        sodaBrands: this.store.findAll('soda-brand')
      });
    }
  }
});
