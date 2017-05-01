$(document).ready(function() {

    $(".downarrow-container").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
    });

    $(".uparrow-container").click(function() {
        $('html, body').animate({
            scrollTop: $(".home").offset().top
        }, 2000);
    });
    
    $(".hamburger-menu").click(function() {
        $(this).toggleClass("is-active");

        $(".dropdown-menu").slideToggle("fast");
    });
});