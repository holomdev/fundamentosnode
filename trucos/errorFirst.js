function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.log(err);
        return false;
        //throw err; No nos va funcionar en funciones asincronas
    }
    console.log('Todo ha salido bien, mi data es: ', dato);
})
