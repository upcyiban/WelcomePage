'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  })
  .controller('ShopListCtrl',function($scope) {
    $scope.shops = [
      {
        'title': '基本查询',
        'src':'#/search',
        'imgsrc':'images/touxiang1.jpg'
      },
      {
        'title': '开学事项',
        'src':'#/about',
        'imgsrc':'images/touxiang1.jpg'

      }
      ,
      {
        'title': '易班指南',
        'src':'#/direct',
        'imgsrc':'images/touxiang1.jpg'
      }
      ,
      {
        'title': '校园须知',
        'src':'#/known',
        'imgsrc':'images/touxiang1.jpg'
      },
      {
        'title': '学校周边',
        'src':'#/around',
        'imgsrc':'images/touxiang1.jpg'
      },
      {
        'title': '学子风采',
        'src':'#/elegant',
        'imgsrc':'images/touxiang1.jpg'
      },
      {
        'title': '石大美景',
        'src':'#/beauty',
        'imgsrc':'images/touxiang1.jpg'
      },
    ]
  });


