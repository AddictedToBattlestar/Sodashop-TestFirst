import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  displayMessage: 'INSERT COIN',
  actions: {
    returnToHome: function() {
      this.transitionToRoute('/');
    },
    insertPenny: function() {
      let notify = this.get('notify');
      let message = notify.error(
        'This soda machine is not able to accept pennies', {
          closeAfter: null
        });
      this.set('displayMessage', 'INSERT COIN');
    },
    insertNickel: function() {
      this.set('displayMessage', '0.05');
    },
    insertDime: function() {
      this.set('displayMessage', '0.10');
    },
    insertQuarter: function() {
      this.set('displayMessage', '0.25');
    }
  }
});
