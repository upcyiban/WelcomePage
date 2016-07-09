'use strict';

/**
 * @ngdoc overview
 * @name welcomePageApp
 * @description
 * # welcomePageApp
 *
 * Main module of the application.
 */
angular
  .module('welcomePageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/direct', {
        templateUrl: 'views/direct.html',
        controller: 'DirectCtrl',
        controllerAs: 'direct'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
