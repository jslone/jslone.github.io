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
      builds: [
        {
          platform: 'windows',
          link: 'builds/games/aplugslife/windows.zip',
          dowload: true
        },
        {
          platform: 'apple',
          link: 'builds/games/aplugslife/macosx.zip',
          dowload: true
        },
        {
          platform: 'linux',
          link: 'builds/games/aplugslife/linux.zip',
          dowload: true
        }
      ],
      team: {
        name: 'Badass Bard Games',
        photo: 'images/games/aplugslife/team.jpg',
        members: [
          {
            name: 'Diana Zhu',
            role: 'Production, Level Design'
          },
          {
            name: 'Sylvia Kosowski',
            role: 'Artwork, Character and Object Design'
          },
          {
            name: 'Ivan Wang',
            role: 'Level Design, Sound Design'
          },
          {
            name: 'Jacob Slone',
            role: 'Programming, World Building'
          },
          {
            name: 'Cloud Tian',
            role: 'Music Composition, Sound Design'
          },
          {
            name: 'Jacqueline Myra Yeung',
            role: 'Design, Tile Design'
          },
          {
            name: 'Wole Idowu',
            role: 'Asset Pipeline Management, Tile Design'
          }
        ]
      }
    }
  ];

  if(typeof $routeParams.id != 'undefined') {
    $scope.game = $scope.games[$routeParams.id];
  }
}]);
