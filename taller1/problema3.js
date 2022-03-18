// 3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
// hay que hacer un monitoreo constante, Cree una función de flecha que
// permita calcular la temperatura media de la luna a partir de la
// temperatura máxima y mínima de cada día 

// función flecha para calcular la temperatura media
let temperaturaMedia = (temperaturas) => "La temperatura media de la luna Endor es "+ (Math.max(...temperaturas)+Math.min(...temperaturas))/2
console.log(temperaturaMedia(temperaturas=[50,30,10,15]))