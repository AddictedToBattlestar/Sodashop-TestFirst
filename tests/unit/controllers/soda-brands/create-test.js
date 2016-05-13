import {
  moduleFor, test
}
from 'ember-qunit';
import sinon from 'sinon';

let controller;
let mockSodaBrandObject, mockSodaBrandObjectSaved;
let mockStore;

function setupMockSodaBrandObject() {
  mockSodaBrandObjectSaved = null;
  return {
    save: function() {
      mockSodaBrandObjectSaved = this;
      return {
        then: function(callback) {
          if (callback) {
            let result = {
              get: function() {
                return 4;
              }
            };
            callback(result);
          }
        }
      };
    }
  };
}

moduleFor('controller:soda-brands/create',
  'Unit | Controller | soda brands/create', {
    beforeEach: function() {
      controller = this.subject();
      mockSodaBrandObject = setupMockSodaBrandObject();
      mockStore = {
        createRecord: function(objectName, settings) {
          mockSodaBrandObject.name = settings.name;
          mockSodaBrandObject.image = settings.image;
          return mockSodaBrandObject;
        }
      };
      controller.store = mockStore;
      controller.transitionToRoute = sinon.spy();
    },
    afterEach: function() {}
  });

test('it saves a soda brand with the proper information', function(assert) {
  assert.expect(4);
  controller.set('brandName', 'foo');
  controller.set('currentFileData', 'mockBase64DataForImage');
  controller.send('createSodaBrand');

  assert.equal(mockSodaBrandObjectSaved.name, 'foo',
    'the "name" field was set');

  assert.equal(mockSodaBrandObjectSaved.image, 'mockBase64DataForImage',
    'the "image" field was set');

  assert.ok(mockSodaBrandObjectSaved !== null,
    'the soda brand was saved to the store');

  assert.ok(controller.transitionToRoute.calledWith(
      'sodaBrand.sodas',
      4),
    'transitions back to the root of the application once the save completes'
  );
});

test('cancelling the creation of a soda brand', function(assert) {
  assert.expect(1);
  controller.send('cancelCreateSodaBrand');

  assert.ok(controller.transitionToRoute.calledWith('sodaBrands'),
    'transitions back to the root of the application once the save completes'
  );
});
