// Ejercicio 11: Resolver problema de referencia de variable.
// Error típico
// ReferenceError: <<identificador>> is not defined

function mostrarSaludo(){
    var mensaje = 'Hola... Estte código se ejecuta en una función';

    console.log(mensaje);
}

// console.log(mensaje);  //ReferenceError: <<identificador>> is not defined

var numero = 7;

function mostrarNumero(){
    console.log(`El numero es: ${numero}`);
}

mostrarNumero();