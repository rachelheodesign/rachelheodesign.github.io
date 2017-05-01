$(document).ready(function() {
    
    $(".hamburger-menu").click(function() {
        $(this).toggleClass("is-active");

        $(".dropdown-menu").slideToggle("fast");
    });
});