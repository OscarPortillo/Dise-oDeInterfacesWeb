$(document).ready(function () {
    ocultarImagenes();
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
