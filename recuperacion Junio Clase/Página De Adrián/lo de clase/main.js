$(document).ready(function () {
    ocultarImagenes();
    ocultarMenu();
});

var ocultarImagenes = function () {
    $("#casa").on("click", function () {
        if ($('.flex-container').is(':visible')) {
            $(".flex-container").hide();
        } else {
            $(".flex-container").show();
        }
    });
}
var ocultarMenu = function(){
    $("#ocultarMenu").on("click", function(){
        $(".menu").children().slideToggle();
    });
}