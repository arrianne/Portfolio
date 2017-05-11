'use strict';

$(function () {
  var $header = $('header');
  var $window = $(window);
  var $links = $('nav a');
  var $menu = $('.menu');

  $window.scroll(updateHeader).trigger('scroll');
  $links.on('click', scrollToSection);
  $menu.on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function updateHeader() {
    var bottomOfHeader = $header.offset().top + $header.height();
    var viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  function scrollToSection() {
    var section = $(this).attr('href');
    $('body').animate({
      scrollTop: $(section).offset().top
    }, 1000, function () {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  $('#arrow1').click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 1000);
  });
  $('#arrow2').click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 1000);
  });
  $('#arrow3').click(function () {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });
});