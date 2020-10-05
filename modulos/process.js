//const process = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('el proceso ya acabo');
    setTimeout(() => {
        console.log('Esto no se va a ejecutar nunca.');
    }, 0);
});

setTimeout(() => {
        console.log('Esto si se va a ejecutar.');
    }, 0);

process.on('uncaughtException', (err) => {
    console.error('Se nos ha olvidado capturar un error');
    console.error(err.message);
});

console.log('Si el error no se captura esta linea no la veras');