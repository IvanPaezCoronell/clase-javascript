

alert('¡Soy JavaScript!');

// comentarios

// comentario de una linea
/* comentario
de mas de una linea */



// sentencias

//alert('Hola'); alert('Mundo');

//alert('Hola')
//alert('Mundo')


// Variables

let mensajes,
mensaje = "Hola Mundio"
alert(mensaje)


// Nombrar variables con camel case
nombreUno= "Ivan";
nombreDos= "David";

// Nombrar como underscore
nombre_uno = "Ivan";
nombre_dos = "David";

// Nombre no comunes
let $ = 1;
let _ = 2;


// Constantes

const PI = 3.14;
const COLOR_ROJO = "#FFFFF"
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);




// Tipos de Datos //

// Dinamicamente tipado
let mensaje_tres = "Hola";
mensaje_tres = 1234

// Numero
let n = 123;
n = 10.01;

// Valores numericos especiales Infinity, -Infinity y NaN

// Infinity representa el infinito matematico. Es un valor especial que es mayor que cualquier numero.
console.log(1 / 0);
console.log(Infinity);

// NaN representa un error de calculo. Es el resultado de una operacion.
console.log("No es un numero:"/2);

// NaN es pegajoso. Cualquier operacion sobre NaN devuelve NaN
console.log("No es un numero: " / 2 + 5);

// Tipo de datos BigInt
// Valores enteros mayores que (9.233.324.684.554)
let numero_grande = 123344234523462343n;
console.log(numero_grande);


// Tipo Stringt
let texto = "Hola";
let texto_dos = 'hola';
let texto_tres = ``; // Backticks Funcionalidad extendida
let nomb = "Ivan";
console.log("Hola" ,nomb);
console.log('Hola',nomb);
console.log(`Hola`,nomb);

// Tipo Booleano
// True y False
let verdadero = true;
let falso = false;
let mayor = 4 > 1; //true

// Valor Null
// Valor especial que no pertenece a ningun tipo d dato anterior
// Forma un tipo propio separado que contiene solo el valor Null
let edad = null;
console.log(edad)

// en JS null no significa un objeto no existente
// Es solo un valor especial que representa nada, vacio.

// Valor UndeFined
// Valor especial que no pertenece a noingun tipo de dato anteriror.
// significa valor no asignado.
let edad_dos;
console.log(edad_dos);


// el operador Typeof o funcion typeof(x), devuelve el tipo de dato.
console.log(typeof undefined);
console.log(typeof 0); //Number
console.log(typeof true); //Boolean
console.log(typeof 10n); // Bigint
console.log(typeof "Hola"); //String
console.log(typeof (alert)); // Function
console.log(typeof (null));
console.log(typeof (Math)); //Object



