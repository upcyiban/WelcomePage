'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('SearchCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  });
