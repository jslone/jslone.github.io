'use strict';

/**
* @ngdoc function
* @name portfolioApp.controller:GamesCtrl
* @description
* # AboutCtrl
* Controller of the portfolioApp
*/
angular.module('portfolioApp')
.controller('ToolsCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
  $scope.games = [

    /*******************************
    ** sald
    ********************************/
    {
      name: 'sald',
      description: {
        short: 'A small javascript game engine.',
        long: [
          'A javascript game engine being developed by the CMU 16-465 class',
          'for use in the Ludem Dare game jam.'
        ].join(' ')
      },
      team: {
        name: 'CMU 16-465 Spring 2015 Class'
      },
      tools: [
        {
          name: 'NodeJS',
          logo: 'images/tools/nodejs-light.png',
          link: 'http://nodejs.org/'
        }
      ],
      source: 'https://github.com/ixchow/sald'
    },

    /*******************************
    ** gge
    ********************************/
    {
      name: 'gge',
      description: {
        short: 'A small C++ 2D game engine.',
        long: [
          'A small 2D game engine made in C++ to make',
          'it easier to develop tile and pallete based',
          'games on modern hardware. Early in development.'
        ].join(' ')
      },
      tools: [
        {
          name: 'SDL',
          logo: 'images/tools/Sdl-logo.png',
          link: 'https://www.libsdl.org/'
        }
      ],
      source: 'https://github.com/jslone/gge'
    }
  ];

  if(typeof $routeParams.id != 'undefined') {
    $scope.game = $scope.games[$routeParams.id];
  }
}]);
