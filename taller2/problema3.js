// 3. PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe
// activar un software que permita clasificar su dieta:
// alimento = {
//  nombre,
//  tipo (Puede ser vegetal, animal, insecto),
//  nivel de energía (números entre 100-500)

// }
// Cree un programa que permita recibir 50 alimentos diferentes y
// mediante una función primaria después de 5 segundos se
// pueda obtener solo los alimentos de tipo vegetal que entreguen
// mas de 200 unidades de energía. Finalmente, una función
// callback debe permitir entregar la sumatoria de niveles de
// energía entregados por los alimentos vegetales consumidos en
// la dieta de Grogu.

// generar automaticamente el arreglo de alimento
let nombres = ["grillos","raíces","porg"]
let tipos = ["insecto","vegetal","animal"]
let alimentos = []
for(let i=0; i<50; i++){
    let alimento = {}
    alimento.nombre = nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo = tipos[Math.floor(Math.random()*tipos.length)]
    alimento.nivel = Math.ceil(Math.random()*(500-100)+100)
    alimentos.push(alimento)
}
console.log(alimentos)

// se genera funcion principal
function alimentoTipoVegetal(sumaNiveles){    
    setTimeout(function(){
        let filtrarAlimentos = alimentos.filter(alimento => alimento.nivel>200 && alimento.tipo=="vegetal")        
        sumaNiveles(filtrarAlimentos)
    },5000)
    
}

// llamar a la funcion principal
alimentoTipoVegetal(function(filtrarAlimentos){
    let sumaNivelesVegetales = 0
    filtrarAlimentos.forEach(function(alimento){
        sumaNivelesVegetales += alimento.nivel
    })
    console.log("La suma de energías entregadas por alimentos del tipo vegetal es: " +sumaNivelesVegetales)
})