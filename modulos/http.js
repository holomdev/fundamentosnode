const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // console.log('Nueva peticion');
    // console.log(req.url);
    // res.writeHead(201, { 'Content-Type': 'text/plain'})
    // //escribir respuesta al usuario
    // res.write('Hola ya se usar http de nodejs');
    // res.end();
}

console.log('Escuchando http en el puerto 3000');