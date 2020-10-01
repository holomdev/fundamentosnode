function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + fabio;
        } catch (err) {
            console.error('error en mi funcion asincrona');
            cb(err);
        }

    }, 1000);
}

try {
    //otraFuncion();
    seRompeAsincrona(function (err) {
        console.log('hay error');
        console.error(err.message);
    });
} catch (err) {
    console.log('hubo un error');
    console.log(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui esta al final');