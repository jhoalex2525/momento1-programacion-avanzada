// 5. PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// nave vendida, menos el 5% de deducciones aplicada solo a las
// comisiones. Codifica un programa que calcule e imprima el
// salario mensual de un vendedor dado;

// función flecha para calcular el salario mensual de un vendedor
let salarioMensual = numeroNaves => "El salario mensual del empleado es "+ (3500000 + 1500000*numeroNaves*0.95)
console.log(salarioMensual(4))