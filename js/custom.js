(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    // code
  });

  $(window).scroll(function () {
    var sticky = $('.header-area'),
      scroll = $(window).scrollTop();

    if (scroll >= 120) {
      sticky.addClass('secondary');
      $('.header-area.secondary .logo h4').css('color', '#000000');
      $('.header-area.secondary .main-menu ul li a').css('color', '#000000');
    } else {
      sticky.removeClass('secondary');
      $('.header-area .logo h4').css('color', '#fff');
      $('.header-area .main-menu ul li a').css('color', '#fff');
    }
  });

  jQuery(window).on('load', function () {
    // code
  });
})(jQuery);

/*

jQuery(document).ready(function () {
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 120) {
      $('.header-area').addClass('secondary');
      $('.header-area.secondary .logo h4').css('color', '#dc3545');
      $('.header-area.secondary .main-menu ul li a').css('color', '#007bff');
    } else if ($('.header-area').hasClass('secondary')) {
      $('.header-area').removeClass('secondary');
      $('.header-area.secondary .main-menu ul li a').css('color', '#fff');
    }

    $('.main-menu').css({
      color: '#000',
    });
  });
});


*/
