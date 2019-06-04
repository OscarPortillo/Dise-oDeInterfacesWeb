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
    http.open("GET", "./laLiga.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            datosEquipo(objeto);
            ponerClaseAlNombre();
        }
    }
} //verDatos
function datosEquipo() {
    var resultados = document.getElementById("resultados");
    for (i in objeto) {
        for (equipo of objeto[i]) {
            var tr = document.createElement("tr");
            for (dato in equipo) {
                var td = document.createElement("td");
                td.append(equipo[dato]);
                tr.append(td)
            }
            resultados.append(tr);
        }
    }
}

function ponerClaseAlNombre(){
    var resultados = document.getElementsByTagName("tr");
    
    for(i of resultados){
        var o = i.firstChild;
        console.log(o);
        console.log(i.firstChild.innerHTML)
    }
}