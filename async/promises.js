function hola(nombre) { 
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        resolve(nombre);
    }, 1000)
  });
}

function hablar(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Bla bla bla...");
        //resolve(nombre);
        reject('Hay un error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Adios ' + nombre);
        resolve(nombre);
    }, 1000);
  })
}

// ---
console.log('Iniciando el proceso');
hola('Fabio')
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso');
  })
  .catch((err) => {
    console.error('Ha habido un error');
    console.error(err);
  })