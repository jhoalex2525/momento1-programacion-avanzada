// 1.PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices
// Padawans 2 actividades dependiendo de la edad de ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de:
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10
// segundos) y una vez este objeto sea creado se debe llamar a una función
// secundaria que clasifique y muestre en consola la actividad asignada al
// Padawan

// se genera funcion principal
function asignarActividad(nombre,planeta,edad,estatura,actividadPadawan){    
    setTimeout(function(){
        let padawan = {
            nombre: nombre,
            planeta: planeta,
            edad: edad,
            estatura: estatura
        }
        actividadPadawan(padawan)
    },10000)
}

// llamar a la funcion principal
asignarActividad('Obi-Wan Kenobi','Takodana',14,'170',function(padawan){
    if(padawan.edad < 15 ){
        console.log('Bienvenido, tomarás la clase de Manejo de la fuerza')
    }
    else{
        console.log('Bienvenido, tomarás la clase de Manejo del sable de luz')
    }    
})