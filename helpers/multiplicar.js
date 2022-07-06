const fs = require('fs');
const colors = require('colors');


// OPCION Ferny *_*
const crearArchivo = async ( tabla  = 5, listar = false, hasta = 10 )=>{     
     try{
          console.log("=====================".grey);
          console.log('Tabla del '.bgCyan, tabla );
          console.log("=====================".grey);
          
          let salida = '';

          for(let i=1; i <= hasta; i++){          
               salida += `${ tabla } x ${ i } = ${ tabla * i }\n`;
          }

          if(listar != false)
               console.log(salida.rainbow);

          fs.writeFileSync( `./salida/tabla-${tabla}.txt`, salida)

          return `tabla-${tabla}.txt`;
      }
      catch( err ){
          throw err;
      }
}

module.exports = {
     //crearArchivo : crearArchivo // es redundante en ES6
     crearArchivo
}



// OPCION Nacho *_*
// const crearArchivo = ( tabla  = 5 )=>{     
//      return new Promise(( res , rej ) => {
//           console.log("=====================");
//           console.log('Tabla del ', tabla );
//           console.log("=====================");
          
//           let salida = '';

//           for(let i=1; i < 11; i++){          
//                salida += `${ tabla } x ${ i } = ${ tabla * i }\n`;
//           }

//           console.log(salida);

//           fs.writeFileSync( `tabla-${tabla}.txt`, salida)

//           console.log(`tabla-${tabla}.txt creado`);
//           }
// )}

// module.exports = {
//      //crearArchivo : crearArchivo // es redundante en ES6
//      crearArchivo
// }