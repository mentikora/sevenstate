"use strict";

(function(){

  // transform menu on scroll
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 100) {
      $('.header_wrapper').addClass('fixed');
      $('.logo_text').fadeIn();
    } else {
      $('.header_wrapper').removeClass('fixed');
      $('.logo_text').fadeOut();
    }
  });

  // scroll to section
  $('#menu span').on('click', function(){
    var data = $(this).data('scroll');
    $('html, body').animate({
      scrollTop: $(data).offset().top
    }, 500);
  });

  //footer scroll top
  $('.gotop').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#first').offset().top
    }, 500);
  });

  // show project info
  $('.project_info_btn').on('click', function(event){
    if ( $(this).hasClass('active')) {
      $(this).removeClass('active');
      $(event.target).closest('header').siblings('.content').fadeOut();
    } else {
      $(this).addClass('active');
      $(event.target).closest('header').siblings('.content').fadeIn();
    }

  });


})();