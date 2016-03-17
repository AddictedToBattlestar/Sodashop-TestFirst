import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | title', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification input', 'testUser');
      fillIn('#password input', 'testPassword');
      click('#authenticate');
      andThen(function() {
        visit('/');
      });
    },
    afterEach() {}
});

test('the title should state "Sodashop"', function(assert) {
  andThen(function() {
    assert.equal($('.title').text().split(" ")[0].trim(), 'Sodashop');
  });
});
