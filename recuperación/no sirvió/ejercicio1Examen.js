console.clear()
const numeros = '1+2+9+3+10+20'
console.log(numeros.split('+').sort((a, b) => a - b).join('+')); //EJERCICIO1

//EJERCICIO2
var crece = false;
var decrece = false;

const cadena = '12341'
const n = cadena.toString()
const m = n.length
console.log(m)
for (i of m) {
    console.log(i)
    if (i[i - 1] < m) {
        decrece = true;
    } else if (i[i + 1] > m) {
        crece = true;
    }
}
console.log(crece && decrece)