'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.contacts = [
     {
      method: 'email',
      email: 'jslone1993@gmail.com'
     },
     {
      method: 'email',
      email: 'jslone@andrew.cmu.edu'
     },
     {
      method: 'phone',
      number: '(269)689-9168'
     },
     {
      method: 'address',
      lines: [
        '5032 Forbes Ave.',
        'SMC 1526',
        'Pittsburgh, PA 15213'
      ]
     }
    ]
  });
