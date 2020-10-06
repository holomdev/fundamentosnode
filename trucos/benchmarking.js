console.time('todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 1000000000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle 2');

console.time('asincrono');
console.log('empieza el proceso async');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    })

console.timeEnd('todo');

function asincrona() {
    return new Promise((res) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            res();
        })
    });
}
