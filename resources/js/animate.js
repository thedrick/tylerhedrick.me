$(function() {
    $('nav a').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $("nav").height()
        }, 400);
        event.preventDefault();
    });
});