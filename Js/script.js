(function ($) {

    "use strict";

        // PRE loader
        $(window).on("load",function(){
          $(".loader-wrapper").fadeOut("slow");
     });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("100%", 0.3);
          $('#about').parallax("20%", 0.3);
          $('#work').parallax("40%", 0.3);
          $('#contact').parallax("60%", 0.3);
          $('#footer').parallax("80%", 0.3);
          }
          initParallax(); 
        // WOW Animation js
        new WOW({ mobile: true }).init();
        // nav scrooll 
        $(window).scroll(function () { 
          let navscrool = $(this). scrollTop()
          if (navscrool>500)
          {
           $(".header").slideDown(700) 
          }
          else
          {
           $(".header").slideUp(700) 
          }
        });
        // smoth scroll
        $(".home-wrapper a").click(function(){
          var scrool = $("#"+$(this).data("scroll")).offset()
          $("html , body").animate( {scrollTop:scrool.top+460},1000
          )
        })
        $("header a").click(function(){
          var scrool = $("#"+$(this).data("scroll")).offset()
          $("html , body").animate( {scrollTop:scrool.top+460},1000
          )
        }
        // carousel 
        );
        $('.owl-carousel').owlCarousel({
          items:1,
          merge:true,
          loop:true,
          margin:10,
          video:true,
          lazyLoad:true,
          center:true,
          responsive:{
              480:{
                  items:2
              },
              600:{
                  items:4
              }
           }
      })
})(jQuery);