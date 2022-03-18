// 2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta
// yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte,
// como distractor el imperio ha creado planos falsos y se tiene el dato de
// que el número de serie de estos planos falsos comienza por encima del
// número 10; es decir todos los planos falsos tienen números de serie
// consecutivos comenzando desde el #11. SOLO si se obtiene un plano
// verdadero Chewbacca y Han pueden abordar su nave y ejecutar un
// mensajeen consola avisando que han despegado
// Configure la rutina necesaria para despegar la nave utilizando callbacks

// declaramos la funcion principal
function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
    let planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
    let planosFiltrados = planos.filter(plano => plano<=10)
    buscarPlanos(planosFiltrados)
}

// llamando funcion principal
filtrarPlanos(100,31,15,17,110,10,11,15,14,12,function(planos){
    if(planos.length>0){
        console.log("Han podido despegar")
    }
    else{
        console.log("Imposible depegar")
    }
})