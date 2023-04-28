// Ejercicio 13: Creacion de una constante con la sentencia const

var nombre = 'Oscar';
let lenguaje = 'JavaScript';
const PI = 3.141592;

nombre = 'Oscar Daniel';
lenguaje = 'JavaScript ES6';
//PI = 3.1415; // TypeError: Assignment to constant variable.

const estudiante = {'id': 6, nombre: 'Oscar Daniel'};

console.log(estudiante);

estudiante.id = 7;

console.log(estudiante);

estudiante = {'id': 8, nombre: 'Oscar Daniel caceres'}; // Assignment to constant variable.

console.log(estudiante);