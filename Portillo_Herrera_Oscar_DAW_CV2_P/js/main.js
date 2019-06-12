$(document).ready(function(){
    esconderMostrarMenu();
});

var esconderMostrarMenu= function(){
    $(".esconder").on("click",function(){
        $(".vertical > ul").css("display", "block");
    })
}