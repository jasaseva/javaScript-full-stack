'use strict';

/**
 * @ngdoc directive
 * @name happySpaApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('happySpaApp')
  .directive('footerSection', footerSection);

function footerSection() {
  return {
    //template: '<div><ng-transclude></ng-transclude></div>',
    templateUrl: './views/partial.footer.html',
    restrict: 'EAC',
    link: link
  }


  return directive;

  function link(scope, element, attrs) {
    scope.team = attrs.author;
    //element.text('this is the footerSection.directive directive');
  };
};
