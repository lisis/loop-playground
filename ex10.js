/**
 * Mi dia a dia
 * 
 * Vamos a escribir un programa que muestre, para cada hora del dia, que actividad realiza un sim en Villa Lobo.  Muestra qué actividad realiza la persona por el terminal PARA CADA HORA.
 * 
 * 1. A las 8, el sim se despierta
 * 2. A las 9, el sim desayuna
 * 3. De 10 a 16, el sim estudia Front End
 * 4. A las 17, siesta
 * 5. De 18 a 22, el sim tiene tiempo libre
 * 6. A las 22, el sim cena
 * 7. A las 23, el sim se va a dormir
 *
 * Escribe un bucle, con los condicionales adecuados dentro del bucle, para que muestre por el terminal lo que hace el sim a cada hora.
 * 
 * Ejemplo:
 * 
 * "A las 8, el sim se despierta"
 * "A las 9, el sim desayuna" 
 * "A las 10, el sim estudia Front End"
 * "A las 11, el sim estudia Front End"
 * ....
 * "A las 23, el sim se va a dormir"
 */

let hora_actual = 8;
let hora_dormir = 24;
let hora_sim = "¿Qué hace el sim? ";

switch (hora_sim){ 
    case 8:
    console.log("A las 8, el sim se despierta"),
        break;

    case 9: 
    console.log("A las 9, el sim desayuna"),
        break;

    case 17:
    console.log("A las 17, el sim hace la siesta"),
        break;

    case 22:
    console.log("A las 22, el sim cena"),
        break;

    case 23:
    console.log("A las 23, el sim se va a dormir"),  
        break; 

    default = "El sim está en villa Lobo";
}


/* let hora_actual = 16;
let hora_dormir = 24;

if (hora_actual < 8 || hora_actual == 22) {
    console.log(`A las ${hora_actual} el sim está durmiendo`);
} else {
    if (hora_actual > 9 && hora_actual < 18) {
        console.log(`A las ${hora_actual} el sim estudia front end`);
    } else {
        if (hora_actual > 17 && hora_actual < 23) {
            console.log(`A las ${hora_actual} el sim tiene tiempo libre`);
        } else {
            switch (hora_actual) {
                case 8:
                    console.log(`A las ${hora_actual} el sim se despierta`);
                    break;
                case 9:
                    console.log(`A las ${hora_actual} el sim desayuna`);
                    break;
                case 17:
                    console.log(`A las ${hora_actual} duerme la siesta`);
                    break;  
                case 23:
                    console.log(`A las ${hora_actual} se va a dormir`);
                    break;     

            }
        }
    }
} */