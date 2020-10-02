const { exec, spawn } = require('child_process');

// exec('dir', (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('cmd.exe', ['/c', 'dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function () {
    console.log(proceso.killed);
    console.log('el proceso termino');
})