$(document).ready(function(){
    $(".about-bt").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500 );
    });
    $(".skills-bt").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 500 );
    });
});