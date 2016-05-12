import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  applicationModel: Ember.computed.reads('applicationController.model'),
  sodaBrandsController: Ember.inject.controller('sodaBrands'),
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  actions: {
    purchaseSoda(soda) {
        let applicationController = this.get('applicationController');
        let amountInserted = applicationController.get('amountInserted');
        let sodaCost = soda.get('cost');
        let sodaQuantity = soda.get('quantity');
        if (sodaQuantity > 0) {
          if (sodaCost > amountInserted) {
            notEnoughMoneyInserted();
          } else {
            dispenseSoda();
          }
        } else {
          soldOut();
        }

        function soldOut() {
          applicationController.send('displayTemporaryMessage', 'SOLD OUT');
        }

        function notEnoughMoneyInserted() {
          applicationController.send('displayTemporaryMessage', 'PRICE ' + soda.get('formattedPriceDollars'));
        }

        function dispenseSoda() {
          generateProductDispenseNotification(soda.get('image'), soda.get('name'));
          soda.set('quantity', --sodaQuantity);
          soda.save();
          let amountRemaining = amountInserted - sodaCost;
          if (amountRemaining !== 0) {
            generateReturnChangeNotification(amountRemaining);
          }
          applicationController.set('amountInserted', 0);
        }

        function generateReturnChangeNotification(amountRemaining) {
          let message = generateCustomMessage('/assets/coin.png', '$' + parseFloat(amountRemaining, 10).toFixed(2) +
            ' change');
          applicationController.send('generateNotification', 'raw', message);
        }

        function generateProductDispenseNotification(productImage, productName) {
          let message = generateCustomMessage(productImage, productName + ' dispensed.  Thank you!');
          applicationController.send('generateNotification', 'raw', message);
        }

        function generateCustomMessage(image, message) {
          return '<md-list-item>' +
            '  <div class="md-list-item-inner">' +
            '    <img alt="meh" class="md-avatar" src="' + image + '"/>' +
            '    <div class="md-list-item-text">' +
            '      <span>' + message + '</span>' +
            '    </div>' +
            '  </div>' +
            '</md-list-item>';
        }
      },
      goToSoda(soda) {
        this.transitionToRoute('sodaBrands.sodaBrand.soda', soda.id);
      }
  }

});
