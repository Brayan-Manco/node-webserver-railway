


http.createServer((req, res ) =>{


    res.write('hola mundo');
    res.end();

}).listen( 8080 );

console.log('Escuchando el puerto', 8080);


//___________________________________________________________


// const http  = require('http');

//forma normal sin utilizar la libreria de express
// http.createServer((req, res ) =>{


//     //para descargar un archivo csv
//     res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
//     res.writeHead(200, {'Conten-Type': 'application/csv'});

//     res.write('id, nombre\n');
//     res.write('1, Brayan\n');
//     res.write('2, Wayra\n');
//     res.write('hola mundo');
//     res.end();

// }).listen( 8080 );

// console.log('Escuchando el puerto', 8080);