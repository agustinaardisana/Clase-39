// // //Ejercicio 1
// const bandas = ["Ramones","Maluma","Ozuna","Babasonicos","Bruno Mars"]

// const primeraBanda = bandas[0]
// const terceraBanda = bandas[2]
// const quintaBanda = bandas[4]

// console.log(`La banda en primer lugar es: ${primeraBanda}. La banda en tercer lugar es: ${terceraBanda}.
// La banda en sexto lugar es: ${quintaBanda}`)

// //Ejercicio 2
// const valorNotas = [1,2,3,4,5,6,7,8,9,10]

// const sumarNotas = () => {

//     let suma = 0
//     for (let i = 0; i < valorNotas.length; i++) {
//         suma = suma + valorNotas[i]
//     }
//     return suma
// }

// console.log(sumarNotas())
// console.log(valorNotas.length)


// const calcularPromedio = () => {

//     let promedio = 0
//     promedio = sumarNotas() / valorNotas.length
//     return promedio
// }

// console.log(calcularPromedio())


// //Ejercicio 3

// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

// for (let i=0; i < playlist.length; i++) {
//     console.log(playlist[i])
// }

// for (let i = playlist.length-1; i >= 0; i--) {
//     console.log(playlist[i])
// }

//Ejercicio 4
const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

const obtenerNumeroAlAzar = () => {
    return Math.floor(Math.random(0,1)*5)
}

//console.log(obtenerNumeroAlAzar())

const obtenerFrutaAlAzar = () => {

    return items[obtenerNumeroAlAzar()]
}
//console.log(obtenerFrutaAlAzar())

//Ejercicio 5
const listaDeFrutas = []

listaDeFrutas[0] = obtenerFrutaAlAzar()
listaDeFrutas[1] = obtenerFrutaAlAzar()
listaDeFrutas[2] = obtenerFrutaAlAzar()
listaDeFrutas[3] = obtenerFrutaAlAzar()
listaDeFrutas[4] = obtenerFrutaAlAzar()

console.log(listaDeFrutas)

//Ejercicio 6
let otraListaDeFrutas = []

for (let i = 0; i < 5; i++) {
    otraListaDeFrutas[i] = obtenerFrutaAlAzar()
}

console.log(otraListaDeFrutas)


