import Ember from 'ember';
import Config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  notify: Ember.inject.service('notify'),
  notificationCloseAfter: Config.notificationCloseAfter,
  amountInserted: 0,
  alternateMessageToDisplay: '',
  actions: {
    returnToHome() {
        this.transitionToRoute('sodaBrands.sodaBrand.sodas', 1);
      },
      invalidateSession() {
        this.get('session').invalidate();
        this.set('model', null);
      },
      login() {
        this.transitionToRoute('login');
      },
      generateNotification(notificationType, message, options) {
        if (!options) {
          options = {
            closeAfter: this.get('notificationCloseAfter')
          };
        }
        let notify = this.get('notify');
        if (notificationType === 'error') {
          notify.error(message, options);
        } else if (notificationType === 'warning') {
          notify.warning(message, options);
        } else if (notificationType === 'success') {
          notify.success(message, options);
        } else if (notificationType === 'raw') {
          notify.success(window.$.extend(options, {
            html: message
          }));
        }
      },
      displayTemporaryMessage(temporaryMessage) {
        this.set('alternateMessageToDisplay', temporaryMessage);
        let that = this;
        let timeout = Config.notificationCloseAfter;
        if (timeout) {
          Ember.run.later((function() {
            that.set('alternateMessageToDisplay', '');
          }), timeout);
        }
      }
  }
});
