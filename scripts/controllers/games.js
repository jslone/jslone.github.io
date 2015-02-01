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

    /*******************************
    ** A Plug's Life
    ********************************/
    {
      name: 'A Plug\'s Life',
      description: {
        short: 'A small platformer for GGJ 2015.',
        long: [
          'A small platformer made by my team for the 48 hour Global Game Jam 2015.',
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
      },
      tools: [
        {
          name: 'Unity',
          logo: 'images/tools/unity-logo.png',
          link: 'http://unity3d.com/'
        }
      ],
      source: 'https://github.com/jslone/APlugsLife'
    },

    /********************************
    ** Bagger
    *********************************/
    {
      name: 'Bagger',
      description: {
        short: 'Small mobile physics game made in a weekend.',
        long: 'Small mobile physics game made in a weekend.'
      },
      thumbnail: '',
      header: '',
      screenshots: false,
      builds: [
        {
          platform: 'android',
          link: 'https://play.google.com/store/apps/details?id=com.gameclosure.bagger'
        }
      ],
      team: {
        members: [
          {
            name: 'Jacob Slone',
            role: 'Programming & Art',
          },
          {
            name: 'B_Lamerichs',
            role: 'Special Thanks for Public Domain Sounds',
            link: 'http://www.freesound.org/people/B_Lamerichs/'
          },
          {
            name: 'Rutger Muller',
            role: 'Special Thanks for Public Domain Sounds',
            link: 'http://www.rutgermuller.nl/'
          }
         ]
      },
      tools: [
        {
          name: 'Unity',
          logo: 'images/tools/unity-logo.png',
          link: 'http://unity3d.com/'
        },
        {
          name: 'Game Closure',
          logo: 'images/tools/game-closure.png',
          link: 'http://www.gameclosure.com/'
        }
      ]
    },

    /***********************************
    ** Belly of the Beast
    ************************************/
    {
      name: 'Belly of the Beast',
      description: {
        short: 'Cute metrovania game featuring a heroic cow, early in development.',
        long: 'Cute metrovania game featuring a heroic cow, early in development.'
      },
      thumbnail: '',
      header: '',
      screenshots: false,
      team: {
        members: [
          {
            name: 'Jacob Slone',
            role: 'Programming'
          },
          {
            name: 'Lindsay Cavallo',
            role: 'Art'
          }
        ]
      },
      tools: [
        {
          name: 'Unity',
          logo: 'images/tools/unity-logo.png',
          link: 'http://unity3d.com/'
        }
      ]
    },

    /**************************************
    ** Feuds
    ***************************************/
    {
      name: 'Feuds',
      description: {
        short: '2 player round based action RTS.',
        long: '2 player round based action RTS.'
      },
      thumbnail: '',
      header: '',
      screenshots: false,
      team: {
        members: [
          {
            name: 'Jacob Slone',
            role: 'Network Programming, Unit AI, Game Mechanics'
          },
          {
            name: 'Paul Aluri',
            role: 'Animation Programming, Level Design'
          },
          {
            name: 'Pasan Pow Julsaksrisakul',
            role: 'UI/UX Programming'
          }
        ]
      },
      tools: [
        {
          name: 'Unity',
          logo: 'images/tools/unity-logo.png',
          link: 'http://unity3d.com/'
        }
      ],
      source: 'https://github.com/paulaluri/Feuds'
    },

    /********************************
    ** Ultimate Tic Tac Toe
    *********************************/
    {
      name: 'Ultimate Tic Tac Toe',
      description: {
        short: 'Ultimate Tic Tac Toe for web and mobile.',
        long: [
          'Ultimate Tic Tac Toe for web and mobile;',
          'play agains the computer, friends on the',
          'same device, or friends on separate devices via Facebook.'
        ].join(' ')
      },
      thumbnail: '',
      header: '',
      screenshots: false,
      builds: [
        {
          platform: 'html5',
          link: 'https://ultttt.herokuapp.com/'
        }
      ],
      tools: [
        {
          name: 'AngularJS',
          logo: 'images/tools/AngularJS-logo.png',
          link: 'https://angularjs.org/'
        },
        {
          name: 'SailsJS',
          logo: 'images/tools/sails-logo.png',
          link: 'http://sailsjs.org/'
        }
      ],
      source: 'https://github.com/jslone/UTTT-backend'
    }
  ];

  if(typeof $routeParams.id != 'undefined') {
    $scope.game = $scope.games[$routeParams.id];
  }
}]);
