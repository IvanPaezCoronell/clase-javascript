

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


// Interacciones: alert, prompt, confirm

// alert
//alert('Hola Mundo');

// prompt
//let non = prompt('Digite el nombre', 'Hola');
//alert(non);


// Confirm
let aguacate = confirm('¿Te gusta el aguacate?');
console.log(aguacate);



// CONVERSION DE TIPOS
// Existen dos tipos de conversiones Explicitas e Implicitas

// Converit a ToString
let valor = true;
console.log(typeof valor);

valor = String(valor);
console.log(valor);
console.log(typeof valor);


// Convertir a Numero
//alert('6' / '2');
 
let cadena = "123"
let num_cad = Number(cadena);
console.log(Number('Hola'));


// Convertir a Booleano
console.log(Boolean("Hola"))
console.log(Boolean(String(0)))
console.log(Boolean(0))


// OPERADORES BASICOS
// Operadores unarios y binarios

// Binarios 
let a, b, resultado;
a = 5;
b = 2;
resultado = a + b;
resultado =a - b;
resultado = a*b;
resultado = a/b;
resultado = a%b;
resultado = a**b;

// Unarios
a =1;
console.log(+a);

a =-1;
console.log(+a);

console.log(+true);
console.log(+false);

a = "2";
b = "3";
console.log(+a + +b);
console.log(Number(a)+Number(b));

// Asignaciones
a = 2+3
a = b = c = 2+3

c=2+3
b=c
a=b

c=3-(a=b+1)

// Modificadores
a = a+2;
a+= 2;
a= a-2
a-=2;


// Incremento y Decremento
a=2;
a++;
console.log(a);


a=2;
a--;
console.log(a);


// Posicion del incremento o decremento
a=1;
b=++a;
console.log(b);

a=1;
b=a++;
console.log(b);

// Comparaciones
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

let res = 2>1;


// Comparaciones entre cadenas
console.log('z' > 'A');
console.log('SHOW' > 'show');
console.log('casa' > 'casas');


// Comparaciones de diferentes tipos
// Al comparar valores de diferentes tipos, JS convierte los valores a numeros.
console.log('**********');
console.log('2' > 1);
console.log('01' == 1);
console.log(true > 0);
console.log(false == 0);
console.log('hola' > 0);
console.log('hola' < 0);


console.log('**********');
a=0;
b='0';
boleano_a = Boolean(a);
boleano_b = Boolean(b);
console.log(a == b);

console.log('***** No diferencia de 0 de falso == *****');
console.log(0 == false);
console.log('' == false);


// Igualacion Estricta
console.log(0 === false);
console.log(null === undefined);
console.log(null == undefined);

// Sentencias IF
// IF de linea
if(4>5) console.log('mensaje');

if(4>5){
    b = 5+3;
    console.log('mensaje');
}


if('45'/3){
    console.log('No entro');
}

if('0'){
    console.log('Entro');
}

if(4/2){
    console.log('Entro');
}

if(1){
    console.log('Entro');
}

let  edadx;
if(!edadx){
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

let eda=20;
console.log(eda>=18);

// Operador ternario
// Condicion ? operacion verdadera : operacion falsa;
resultado = eda >= 18 ? x = 5 : x=7;

// Operador Logico
// or
console.log('***** Operador OR *****');
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

if(4 == 4 || 2 > 5) {
    console.log('verdadero');
}

// AND
console.log('***** Operador AND *****');
console.log(true && true) // true
console.log(true && false) // true
console.log(false && true) // true
console.log(false && false) // false

if(4 == 4 && 2 > 5) {
    console.log('verdadero');
}


let comparacion_booleana = true && false && true;
comparacion_booleana = '0' || '0';
comparacion_booleana = undefined || null || NaN || '';
comparacion_booleana = undefined || null || 3 || '';


// PREVALENCIA U ORDENENTRE OR Y AND
// a && b || c && d == (a && b) || (c && d)

// Negacion
console.log('***** Negacion *****');
console.log(!true);
console.log(!false);
console.log(!!undefined);

// BUCLES WHILE Y FOR
// while
let i=0;
while(i<10){
    console.log(`El valor de i es: ${i}`);
    i++;
}

console.log(`***********`);
let u=10;
while(u){
    console.log(`El valor de u es: ${u}`);
    u--;
}

console.log(`****** FOR *****`);


// FOR
for(i=0; i<=10; i++){
    console.log(`El valor de i es: ${i}`);
}
console.log(`***********`);
for(i=10; i>=0; i--){
    console.log(`El valor de i es: ${i}`);
}


// Alcance de una variable
console.log(`****** ALCANCE DE UNA VARIABLE *****`);
for(let j=0;j<=10;j++){
    console.log(`El valor de j es: ${j}`);
}
//console.log(`El valor de j es: ${j}`);


// Saltado de partes
console.log(`****** Salto de partes *****`);
w = 0;
for(; w<=10;){
    console.log(`El valor de w es: ${w++}`);
}


// Break y Continue
console.log(`****** Break y Continue *****`);
w = 0;
while(1){
    console.log(`El valor de w es: ${w++}`);
    if(w==11) break;       
}


for(i=1; i<=10; i++){
    if(i%2 !=0) continue;
    console.log(`${i} es numero par.`);
}



// Etiquetas para Break y Continue
console.log(`****** Etiquuetas *****`);
principal: for(i=0; i<=10; i++){
    for(j=0; j<=10; j++){
        console.log(`La suma de i+j es: ${i+j}`);
        if (j == 2) break principal;
    }
   
    
}
console.log(`Salio`);
