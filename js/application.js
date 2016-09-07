"use strict";

(function(){

  // transform menu on scroll
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 90) {
      $('.header_wrapper').addClass('fixed');
      $('.logo_text').css('display', 'block');
    } else {
      $('.header_wrapper').removeClass('fixed');
      $('.logo_text').css('display', 'none');
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

  // discuss scroll to contacts
  $('.discuss').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#fifth').offset().top
    }, 500);
  });

  // show project info
  $('.project_info_btn').on('click', function(event){
    if ( $(this).hasClass('active')) {
      $(this).removeClass('active');
      $(event.target).closest('header').siblings('.content').slideUp();
    } else {
      $(this).addClass('active');
      $(event.target).closest('header').siblings('.content').slideDown();
    }
  });

  // menu set active el on scroll
  $(document).on("scroll", onScroll);

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu span').each(function () {
      var curr = $(this);
      var refElement = $(curr.data("scroll"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu span').removeClass("active");
        curr.addClass("active");
      }
      else{
        curr.removeClass("active");
      }
    });
  }

  // employee fake_line position
  $(window).on("load resize",function(e){
    $('.fake_line').css('bottom', $('.employee.middle').outerHeight() + 'px');
  });

  // show menu on mobile
  $('.mobile_toggle_btn').on('click', function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#menu').slideUp();
    } else{
      $(this).addClass('open');
      $('#menu').slideDown();
    }
  });
  
  // wow animation
  new WOW().init();

})();