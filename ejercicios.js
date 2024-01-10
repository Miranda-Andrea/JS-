// Variables tipo number
let edad = Number(28);
let yearOfBirth = Number(1995);
let dayoOfBirth = Number(26);
let celular = Number(5528875031);
let numeroDeCasa = Number(5557007088);
let mascotas = Number(8);
let numeroDeHermanos = Number(7);
let numeroDeSobrinos = Number(3);
let num1 = 5;
let num2 = 10;

console.log(edad, yearOfBirth, dayoOfBirth, celular, numeroDeCasa, numeroDeHermanos, numeroDeSobrinos, num1, num2);

//Variables tipo String

let str1 = "Miranda";
let str2 = "Andrea";
let str3 = "Posadas";
let str4 = "Navarro";
let str5 = "Ingeniera electrica";
let str6 = "Programacion";
let str7 = "JavaScript";
let str8 = "Ejercicios";
let str9 = "Hola";
let str10 = "Mundo";

console.log(str1, str2, str3, str4, str5, str6, str7, str8, str9, str10);

//Variables tipo Boolean

let bool1 = true;
let bool2 = false;
let bool3 = true;
let bool4 = false;
let bool5 = true;
let bool6 = false;
let bool7 = true;
let bool8 = false;
let bool9 = true;
let bool10 = true;

console.log(bool1, bool2, bool3, bool4, bool5, bool6, bool7, bool8, bool9, bool10);

//Operaciones aritmeticas basicas 

let num11 = 10;
let num12 = 5;

let suma = num11 + num12;
console.log("suma:" + suma)

let resta = num11 - num12;
console.log("resta:" + resta)

let multiplicacion = num11 * num12;
console.log("multiplicacion:" + multiplicacion)

let division = num11 / num12;
console.log("division:" + division)

// Concatenacion de textos

let texto1 = "Hola" ;
let texto2 = " " ;
let texto3 = "Mundo" ;
let texto4 = " ";
let texto5 = "estoy" ;
let texto6 = " " ;
let texto7 = "Programando" ;

let resultado = texto1 + texto2 + texto3 + texto4 + texto5 + texto6 + texto7; 

console.log(resultado);

//Convertir tipo de dato


let numero_entero = 10;
let numero_decimal = 5.5;
let texto = "Hola, mundo!";
let bool11 = true;
let lista_numeros = [1, 2, 3, 4, 5];

numero_entero_a_float = float(numero_entero);
numero_decimal_a_int = int(numero_decimal);
texto_a_lista = list(texto);
booleano_a_str = str(bool11);
lista_numeros_a_set = set(lista_numeros);

numero_entero = 10
numero_decimal = 5.5
texto = "Hola, mundo!"
bool11 = true;
lista_numeros = [1, 2, 3, 4, 5]

numero_entero_a_float = float(numero_entero);
numero_decimal_a_int = int(numero_decimal);
texto_a_lista = list(texto);
booleano_a_str = str(bool11);
lista_numeros_a_set = set(lista_numeros);


/// SESION 2 JS //

// FUNCIONES

//Perimetro de un circulo formula:2πr

function calcularPerimetroCirculo(radio) {
    // Validar que el radio sea un número positivo
    if (radio < 0 || isNaN(radio)) {
        throw new Error("El radio debe ser un número positivo.");
    }

    // Calcular el perímetro usando la fórmula: 2 * pi * radio
    var perimetro = 2 * Math.PI * radio;
    return perimetro;
}

//Area de un rectangulo

function calcularAreaRectangulo(ancho, alto) {
    // Validar que ambos valores sean números positivos
    if (ancho < 0 || alto < 0 || isNaN(ancho) || isNaN(alto)) {
        throw new Error("Ancho y alto deben ser números positivos.");
    }

    // Calcular el área usando la fórmula: ancho * alto
    var area = ancho * alto;
    return area;
}

//Cuadrado de un numero

function calcularCuadrado(numero) {
    // Validar que el valor sea un número
    if (isNaN(numero)) {
        throw new Error("El valor debe ser un número.");
    }

    // Calcular el cuadrado usando la fórmula: numero * numero
    var cuadrado = numero * numero;
    return cuadrado;
}

//Conversion de grados Celsius a Farenheit
function celsiusToFahrenheit(celsius) {
    // Validar que el valor sea un número
    if (isNaN(celsius)) {
        throw new Error("El valor debe ser un número.");
    }

    // Aplicar la fórmula de conversión: (Celsius * 9/5) + 32
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

//Calcular el voltaje dadas la resistencia y la corriente (Voltaje = Resistencia * Corriente).
function calcularVoltaje(resistencia, corriente) {
    // Validar que ambos valores sean números
    if (isNaN(resistencia) || isNaN(corriente)) {
        throw new Error("La resistencia y la corriente deben ser números.");
    }

    // Calcular el voltaje usando la Ley de Ohm: Voltaje = Resistencia * Corriente
    var voltaje = resistencia * corriente;
    return voltaje;
}

//Volumen de una esfera  (4/3)πr3
function calcularVolumenEsfera(radio) {
    // Validar que el radio sea un número positivo
    if (radio < 0 || isNaN(radio)) {
        throw new Error("El radio debe ser un número positivo.");
    }

    // Calcular el volumen usando la fórmula: (4/3) * pi * radio^3
    var volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    return volumen;
}


// EJERCICIO 1

function verificarEdadParaVotar(edad) {
    if (edad >= 18) {
        console.log("¡Puedes votar! 🗳️");
    } else {
        console.log("Lo siento, no tienes la edad suficiente para votar. 🚫");
    }

// EJERCICIO 2

function calcularPromedioYEvaluar(calificacion1, calificacion2, calificacion3, calificacion4) {
    // Calcular el promedio
    var promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    // Evaluar si el promedio es aprobatorio
    if (promedio >= 7) {
        console.log("¡Aprobado! Promedio: " + promedio);
    } else {
        console.log("Reprobado. Promedio: " + promedio);
    }
}

// EJERCICIO 4

function esDivisibleEntre7y8(numero) {
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}

// Casos de prueba
esDivisibleEntre7y8(56);  // Verdadero
esDivisibleEntre7y8(7);   // Falso
esDivisibleEntre7y8(8);   // Falso
esDivisibleEntre7y8(0);   // Verdadero
esDivisibleEntre7y8(224); // Verdadero
esDivisibleEntre7y8(73);  // Falso


