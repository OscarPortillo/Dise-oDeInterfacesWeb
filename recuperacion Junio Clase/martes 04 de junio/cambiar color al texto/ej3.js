window.onload = function () {
    verDatos();
}
var objeto;
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./colores.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            cambiarColor();
        }
    }
} //verDatos

function cambiarColor() {
    var select = document.getElementsByTagName("select").innerHTML="";
    console.log(select)
    for (i in objeto) {
        for (j of objeto[i]) {
            for (k in j) {
                var opc = document.createElement("option");
                opc.append(k);
                console.log(opc); //nombre del color
                //console.log(j[k]); //codigo del color
                select.append(opc);
            }
        }

    }
                
}
