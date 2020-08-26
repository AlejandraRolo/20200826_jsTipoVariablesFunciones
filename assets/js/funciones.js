/* FUNCIONES */

/* Funcion tradicional, se define con la palabra reservada function */

function soyUnaFuncion(num1, num2){
    // retorna un valor o el resultado del proceso.
    // finaliza la ejecucion del function
    return num1+num2;
}

console.log(soyUnaFuncion); // de esta manera me va a retornar la estructura de la funcion


/* FUNCIONES ANONIMAS :  
* Se utiliza directamente sin un nombre , por ejemplo una funcion flecha ()=>
* las funciones se pueden almacenar dentro de una variable
* Al ser anonima nos permite reutilizarla
* Es una sintaxis mas limpia y simple
*/

// ejemplo, ** es mas efectiva de esta manera
let sumar= (a,b)=> a+b;
console.log(sumar(10,15));


// una funcion tradicional la podría transformar en anonima

// ejemplo:
let hola= function(){
    return "Hola, cómo estás?"
}
console.log(hola());



/* CONDICIONALES: 
* Grupo de instrucciones que se puede ejecutar si una condicion se cumple
* Flujo del programa a partir de una condicion
*/

// ejemplo

let color= prompt("Ingrese un color en Ingles");

if(color == "red"){
    document.write("<h1 style='color:red'>Si, el color es red-rojo</h1>")
}else{
    document.write("<h1 style='color:" + color + "'>No, el color no es red-rojo, el color escogido fue " + color + "</h1>")
}

/* OPERADORES DE COMPARACION
* == IGUALDAD
* === ESTRICTAMENTE IGUAL: Tiene que ser el mismo tipo de dato
* != DIFERENTE O DISTINTO
* !== NO IDENTICO: Hasta el tipo de dato debe ser diferente
* 
* < MENOR QUE
* <= MENOR O IGUAL QUE
* > MAYOR QUE
* >= MAYOR O IGUAL QUE
 */

 // ejemplo

let year= 2020;

if(year !=2020){
    document.write("El año es diferente a 2020")
}else{
    document.write("Si, el año es 2020")
}


 /* OPERADORES LÓGICOS 
 * && AND   --> Y
 * || OR    --> Ó
 * ! NOT    --> NEGACIÓN, QUE NO SE CUMPLA ALGO
 */

 // ejemplo && AND  --> Y

let nota= 3.5;

// se crea un rango de notas

 /* validamos un rango entre 4.5 y 5 */
 if(nota >= 4.5 && nota <=5){
     document.write("<br> Felicidades has ganado la beca!!")
 /* validamos un rango entre 4.49999 y 0 */
 }else if(nota < 4.5 && nota >=0){
     document.write("<br> Vuelve a intentarlo!!")
 }else{
     document.write("<br> Ingrese un numero entre 0 y 5")
 }


 // ejemplo || OR  --> O

 let pais= "Colombia";

 if(pais== "Colombia" || pais== "Peru" || pais== "Mexico"){
     document.write("<br> El país pertenece a Latino America")
 }else{
    document.write("<br> A donde pertenece ese país?")
 }


  // ejemplo SWITCH

  var operacion= prompt("Ingrese alguna de las siguientes opciones para realizar una operación aritmetica: * suma, resta, multiplicacion, division");

  // parseFloat, parseInt : Son metodos que nos permiten modificar la tipología de un dato, convirtiendolos a enteros o decimales
  let num1= parseFloat(prompt("Ingrese número 1"));
  let num2= parseFloat(prompt("Ingrese número 2"));

  switch(operacion){
    case "suma":    // si es igual a suma
        document.write("<br> El resultado de la suma es: " + (num1+num2));
        break; // Se rompe la ejecucición de este bloque de codigo y no sigue evaluando mas casos
    case "resta":    // si es igual a resta
        document.write("<br> El resultado de la resta es: " + (num1-num2));
        break;
    case "multiplicacion":    // si es igual a multiplicacion
        document.write("<br> El resultado de la multiplicacion es: " + (num1*num2));
        break;
    case "division":    // si es igual a division
        document.write("<br> El resultado de la division es: " + (num1/num2));
        break;
    default: // en caso que ninguno de los casos se cumple
        document.write("<br> La operación no existe");
        break;

  }

