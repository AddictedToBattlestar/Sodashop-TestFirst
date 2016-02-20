import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accept coins', {
  beforeEach: function() {
    server.loadFixtures();
    visit('/');
  },
  afterEach: function() {}
});

test('When there are no coins inserted',
  function(assert) {
    andThen(function() {
      assert.equal($('#vendingMachineDisplay').text(), 'INSERT COIN',
        'the machine displays INSERT COIN');
    });
  });

test('When a quarter is inserted', function(assert) {
  click('#quarter');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay').text(), '$0.25 INSERTED',
      'the machine displays "$0.25 INSERTED"');
  });
});

test('When a dime is inserted', function(assert) {
  click('#dime');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay').text(), '$0.10 INSERTED',
      'the machine displays "$0.10 INSERTED"');
  });
});

test('When a nickel is inserted', function(assert) {
  click('#nickel');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay').text(), '$0.05 INSERTED',
      'the machine displays "$0.05 INSERTED"');
  });
});

test('When a penny is inserted', function(assert) {
  click('#penny');

  andThen(function() {
    assert.equal($('#vendingMachineDisplay').text(), 'INSERT COIN',
      'the machine displays "INSERT COIN"');
    // assert.equal($('.message').text(),
    //   'This soda machine is not able to accept pennies',
    //   'the machine shows an error message');
  });
});

test('When a nickel and a dime is inserted', function(assert) {
  click('#nickel');
  click('#dime');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay').text(), '$0.15 INSERTED',
      'the machine displays "$0.15 INSERTED"');
  });
});
