import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | title');

test('the title should state "Sodashop"', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal($('#title').text(), 'Sodashop');
  });
});
