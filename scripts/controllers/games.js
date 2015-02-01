'use strict';

/**
* @ngdoc function
* @name portfolioApp.controller:GamesCtrl
* @description
* # AboutCtrl
* Controller of the portfolioApp
*/
angular.module('portfolioApp')
.controller('GamesCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
  $scope.games = [
    {
      name: 'A Plug\'s Life',
      description: {
        short: 'A small platformer for GGJ 2015.',
        long: [
            'A small platformer made by my team for the Global Game Jam 2015.',
            'We decided to remove the traditional mechanic of jumping and replace',
            'it with rotation. Players rotate the entire world in order to navigate',
            'labyrinths and solve puzzles, as well as challenge their own spatial',
            'reasoning abilities.'
          ].join(' ')
      },
      thumbnail: 'images/games/aplugslife/start.png',
      header: 'images/games/aplugslife/startwide.png',
      screenshots: [
        'images/games/aplugslife/1.png',
        'images/games/aplugslife/2.png',
        'images/games/aplugslife/3.png',
        'images/games/aplugslife/4.png'
      ],
      platforms: {
        windows: true,
        mac: true,
        linux: true
      }
    }
  ];

  if(typeof $routeParams.id != 'undefined') {
    $scope.game = $scope.games[$routeParams.id];
  }
}]);
