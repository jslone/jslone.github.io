'use strict';

/**
* @ngdoc directive
* @name portfolioApp.directive:ImgMat
* @description
* # <%= cameledName %>
*/
angular.module('portfolioApp')
.directive('imgMat', function () {
  return {
    template: '<img class="materialboxed z-depth-1" ng-src="{{src}}">',
    restrict: 'E',
    scope: {
      src: '@'
    },
    link: function(scope,elem,attr) {
      $('.materialboxed').materialbox();
    }
  };
});
