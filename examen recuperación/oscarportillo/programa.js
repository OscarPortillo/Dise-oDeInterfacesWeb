$(document).ready(function () {
    ocultar();
})

function ocultar(){
    console.log("hola")
    $( "#boton" ).click(function() {
        $("#menu").toggle();
      });
}