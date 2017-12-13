$(function() {
    $('#scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.scroll-ok').offset().top }, 'slow');
      return false;
    });
  });