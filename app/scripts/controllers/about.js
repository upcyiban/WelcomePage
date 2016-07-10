'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('AboutCtrl', function () {
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
    $('.xuzhi').on('click',function(){
      setTimeout(function(){
        var xuzhison=$('.xuzhi').closest('.ul').find('.xuzhison');
        if(xuzhison.hasClass('hidden')){
          xuzhison.removeClass('hidden');
          $(".xuzhison p").fadeIn("slow");
        }else{
          xuzhison.addClass('hidden');
        }
      },500)
    });
    $('.junxun').on('click',function(){
      setTimeout(function(){
        var junxunson=$('.junxun').closest('.ul').find('.junxunson');
        if(junxunson.hasClass('hidden')){
          junxunson.removeClass('hidden');
          $(".junxunson p").fadeIn("slow");
        }else{
          junxunson.addClass('hidden');
        }
      },500)
    });
    $('.ul a').click(function (e) {
      e.preventDefault()
      $(this).tab('show').fadeIn('slow');
    })
  });

