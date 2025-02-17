/**
 * Bucle condicionado.
 * 
 * Ejecuta el script y observa que sucede.
 * ¿Cuantas veces se ejecuta el código del bucle?
 * 
 * Modifica el código del bucle y una esctrictura condicional if..else; para que:
 * Si i es un número negativo, mostrar por el terminal "Soy un número negativo"
 * Si i es un número positivo, mostrar por el terminal "Soy un número positivo"
 */

 let numeroFinal = 5;
 let numeroEntero = 0;

 for (let i=-5;i<numeroFinal; i++) {
    console.log("Voy a ejecutar el condicional para el número: " + i)
    //quiero comprobar si la i es negativa 
    if (i<0){
        console.log ("Soy un número negativo")
    } else if (i==numeroEntero) {
        console.log ("Soy un número entero") 
    }
    else {
        console.log ("Soy un número positivo")
    }
}

/**
 * Pregunta adicional BONUS.
 * 
 * - En este bucle, qué valor tiene la VARIABLE DE INICIALIZACIóN?
 * - ¿Cuantas iteraciones ocurren en este bucle? ¿1? ¿5?
 * - ¿Cuantas instrucciones se ejecutan en CADA iteración de este bucle? ¿1? ¿2?
 */