

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100 ) {
            $(".nav").css("background-color", "#FFFFFF");  
            $(".nav").addClass('scrolled');

            $("#logo").css("background", "url('images/logo.webp') no-repeat");
            $(".buttonnav").css("color", "rgba(254, 195, 1, 1)");
            $(".buttonnav").css("border",  "2px solid rgba(254, 195, 1, 1)");
           
        }
  
        else{
            $(".nav").css("background-color", "transparent");

            $(".nav").removeClass('scrolled');
            
            $("#logo").css("background", "url('images/logo2.webp') no-repeat");
            $(".buttonnav").css("color", "white");
            $(".buttonnav").css("border",  "2px solid white");
        }
    })
  })


            
           
            