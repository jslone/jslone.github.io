'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'routeStyles'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        css: 'styles/resume.css'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/game/:id', {
        templateUrl: 'views/game.html',
        controller: 'GamesCtrl',
        css: 'styles/games.css'
      })
      .otherwise({
        redirectTo: '/games'
      });
  });

$(".button-collapse").sideNav();
