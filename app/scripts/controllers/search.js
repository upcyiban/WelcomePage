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
    $(document).ready(function () {
      $("p").fadeOut("slow");
    });
    var YTMenu = (function() {

      function init() {

        [].slice.call( document.querySelectorAll( '.dr-menu' ) ).forEach( function( el, i ) {

          var trigger = el.querySelector( 'div.dr-trigger' ),
            icon = trigger.querySelector( 'span.dr-icon-menu' ),
            open = false;

          trigger.addEventListener( 'click', function( event ) {
            if( !open ) {
              el.className += ' dr-menu-open';
              open = true;
            }
          }, false );

          icon.addEventListener( 'click', function( event ) {
            if( open ) {
              event.stopPropagation();
              open = false;
              el.className = el.className.replace(/\bdr-menu-open\b/,'');
              return false;
            }
          }, false );

        } );

      }

      init();

    })();
  });
