/* TIPOS DE VARIABLES 
* var : Me permite realizar modificaciones a la variable, a su valor; al igual que "let"
* const : Es una constante que no permite cambiar cambiar su valor una vez declarada, * no es recomendable dejarla nula o vacia
*/

// EJ. con var: esta variable persiste la variable a nivel GLOBAL

var nombre = "Maria Perez";
nombre = "Maria Sanchez";  /* El tipo de variable me permite modificar su valor */
console.log(nombre);


// EJ. con let: esta variable persiste la variable únicamente a nivel LOCAL

let nombreLet = "Laura Martinez";
nombre = "Laura Perez";  /* El tipo de variable me permite modificar su valor */
console.log(nombreLet);


// EJ. con const

const nombreConst = "Pedro Sanchez";
/*nombreConst = "Pedro Garcia";  // como es un tipo de variable constante al tratar de re asignar nos va a generar "error" */
console.log(nombreConst);


/* Alcance Global - Alcance Local */

/* GLOBAL : Se puede modificar en cualquier seccion del código */

var global = 0; /* inicializa como 0 */

function varGlobal(){
    for(var i = 0; i < 5; i++){
        global=i; /* En cada vuelta el valor de la variable i se le va asignar a la global */
    }
}
// invocar la función
varGlobal();
console.log(global); /* Nos imprime 4 */


/* LOCAL : es declarado dentro de un bloque de código */

function varLocal(){
    var local= "Hola Mundo!!"; /* Al declarar la variable de esta manera asi sea var, se establecerá como variable local */
    console.log(local);
}

// invocar la función
varLocal();
/* console.log(local); // si tratamos de imprimir el valor por consola: Nos arroja un error , ya que es una variable local */


/* ejemplo */

// con var
function varPruebas(){
    var x= 70;
    if(true){
        var x= 50; 
        console.log(x); // se imprimira 50
    }

    console.log(x); // se imprimira nuevamente 50, ya que se sobreescribio el valor
}

// con let
function letPrueba(){
    let y= 30;
    if(true){
        let y= 60;
        console.log(y); // se imprimirá 60
    }
    console.log(y); // se imprimira 30, no se sobreescribirá el valor
}