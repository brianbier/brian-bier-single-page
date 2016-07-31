/***************** Preloader ******************/
$(document).ready(function(){
  $('#preloader').fadeOut('slow',function(){
    $(this).remove();
    $('.slide-down-content').addClass('textAppear');
  })

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $('.nav-toggle').on('click',function(){
    $(this).toggleClass("active");
    $('.navigation').toggleClass('open');
  })

  /* When user clicks a link */  
  $('.overlay ul li a').on('click',function(){
    $(".nav-toggle").toggleClass("active");
    $(".navigation").toggleClass("open");
  })

  /* When user clicks outside */
  $(".overlay").click(function() {
      $(".nav-toggle").toggleClass("active");
      $(".navigation").toggleClass("open");
  });


  /***************** Header Background Scroll ******************/
        $(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 40) {
                    $(".fixed-header").addClass("hasBg header-sml");
                } else {
                    $(".fixed-header").removeClass("hasBg header-sml");
                }
            });
        });

});