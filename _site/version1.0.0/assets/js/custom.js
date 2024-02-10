
(function($) {
    "use strict";

   /* ==============================================
    Fixed menu
    =============================================== */
    
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.header_style_01').addClass('fixed-menu');
    } else {
      $('.header_style_01').removeClass('fixed-menu');
    }
  });
  /* ==============================================
    Scroll to top  
  ============================================== */
    
  if ($('#scroll-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#scroll-to-top').addClass('show');
        } else {
          $('#scroll-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#scroll-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
})(jQuery);

