
$("document").ready(function(){
    $("#nonedot").find("li").mouseover(function(){
        $(this).css("background-color","white");
    });
    $(".menu").mouseleave(function(){
        $(this.h4).css("backgroundcolor","white");
    });
    
   $(".m4").click(function(){
       $("body").animate({scrollTop : $(".main_img").offset().top}, 1000);
   });
   $(".m3").click(function(){
        var offset = parseInt($('.boxes').offset().top);
        var bheight = $(window).height();
        var percent = 0.05;
        var hpercent = bheight * percent;
        $('html,body').animate({scrollTop: offset - hpercent}, 1000);
   });
   $(".m2").click(function(){
       $("body").animate({scrollTop : $(".contact").offset().top}, 1000);
   });
   
   $(".hover").mouseover(function(){
       $(this).css("background-color","purple");
    });
});
