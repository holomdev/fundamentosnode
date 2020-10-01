console.log('algo');
console.error('Un error');
console.warn('Un warning');

let tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'H'
    }
];

console.table(tabla);

console.group('Conversacion');
console.log('Hola');
console.group('bla');
console.log('Blablablabla');
console.log('Blablablabla');
console.log('Blablablabla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('otra cosas de otra funcion');


function function1() {
    console.group('Funcion1');
    console.log('Esto es de la funcion1');
    console.log('Esto tambien');
    function2();
    console.log('He vuelto a la 1');
    console.groupEnd('Funcion1');
}

function function2() {
    console.group('Funcion2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('Funcion2');
}

console.log('empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');