//const { argv, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();
//const tabla = 5;

console.log(process.argv);
console.log( argv ); // mediante Yargs

console.log("Acceso valores en Yargs --> ", argv.base);

/*
console.log(process.argv); // Capturar los argumentos pasados por la consola
console.log('-----------');
const [ , , arg3 = 'base=5'] = process.argv;
const [, tabla = 5] = arg3.split('=');
//console.log( arg3 );
console.log( tabla );
*/

//-----------------------------------------
// OPCION Nacho *_* 
// crearArchivo ( tabla )
//      .then( res => console.log(nombreArchivo, 'creado') )
//      .catch( rej => console.log( err ) );
//-----------------------------------------


//-----------------------------------------
// OPCION Ferny *_*
crearArchivo ( argv.b, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
     .catch( err => console.log( err ) );
//-----------------------------------------


     