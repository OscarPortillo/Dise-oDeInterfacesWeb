console.clear()
const n = 123415
var crece = false
var decrece = false

N = n.toString()

for (i = 1; i < N.length; i++) {
    if (N[i - 1] < N[i]) crece = true
    if (N[i - 1] > N[i]) decrece = true
    //otra manera en una linea:
    //N[i]>N[i-1] ? crece =true : decrece=true
}

console.log(crece && decrece);