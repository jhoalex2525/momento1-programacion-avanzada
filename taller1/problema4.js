// 4. PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo
// de 20 sables de luz y contabilizar la cantidad de sables que
// tienen energías menores a 20 Joules.

// Nota: el formato de cada sable es:
// cable={
// color:v erde,
//  energía: 50 ,
//  portafor: Obi Wan
// }

//generador de arreglo de sables aleatorio
let colores = ["verde","azul","rojo","morado"]
let portadores = ["Obi","Wan","Darth","Han"]
let sables = []
for(let i=0; i<20; i++){
    let sable = {}    
    sable.color = colores[Math.floor(Math.random()*colores.length)]
    sable.energia = Math.ceil(Math.random()*50)
    sable.portador = portadores[Math.floor(Math.random()*portadores.length)]
    sables.push(sable)
}
console.log(sables)

//contabilizando los sables con energia menor a 20 joules
let filtrarSables = sables.filter(sable => sable.energia<20)
console.log("La cantidad de sables con una energia menor a 20 Joules es: " + filtrarSables.length)