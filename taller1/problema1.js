// 1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
// Padawan a calcular la distancia a la que cualquiera de los planetas de la
// ruta N-14 pertenecientes a la ruta comercial de la federación
// intergaláctica, se encuentra del planeta NABOO.
// Para calcular dicha distancia se debe:
// • Recibir las coordenadas X,Y del planeta en UA
// • Establecer la distancia como:

// función flecha para calcular la distancia entre dos planetas
let distanciaPlanetas = (x1,y1,x2,y2) => "La distancia entre los planetas es "+ Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)).toFixed(2)
console.log(distanciaPlanetas(0,0,-10,-10))