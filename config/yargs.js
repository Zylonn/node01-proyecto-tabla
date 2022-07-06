const { number } = require('yargs');

const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    describe: 'base de la tabla',
                    demandOption:true
                })
                .options('l',{
                    alias: 'listar',
                    type: 'boolean',
                    describe: 'lista la tabla',
                    default : false
                })
                .options('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Indica hasta que número se multiplica',
                    default: 10,
                    demandOption: false
                })
                    .check( (argv, options) =>{
                        if( isNaN( argv.b ) ){
                            throw ' La base tiene que ser un número ';
                        }
                        if (isNaN( argv.h)){
                              throw ' Hasta tiene que ser un número ';
                        }
                        return true;
                    } )
                    .argv;

module.exports = argv;