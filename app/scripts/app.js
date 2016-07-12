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
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/known', {
        templateUrl: 'views/known.html',
        controller: 'KnownCtrl',
        controllerAs: 'known'
      })
      .when('/around', {
        templateUrl: 'views/around.html',
        controller: 'AroundCtrl',
        controllerAs: 'around'
      })
      .when('/elegant', {
        templateUrl: 'views/elegant.html',
        controller: 'ElegantCtrl',
        controllerAs: 'elegant'
      })
      .when('/beauty', {
        templateUrl: 'views/beauty.html',
        controller: 'BeautyCtrl',
        controllerAs: 'beauty'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

