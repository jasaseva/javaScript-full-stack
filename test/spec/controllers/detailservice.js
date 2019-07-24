'use strict';

describe('Controller: DetailserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('happySpaApp'));

  var DetailserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailserviceCtrl = $controller('DetailserviceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetailserviceCtrl.awesomeThings.length).toBe(3);
  });
});
