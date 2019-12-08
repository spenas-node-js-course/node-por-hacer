const descripcion = {
    
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

};


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer',{ descripcion})
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista toda esa mondá')
    .command('borrar', 'borrar un archivo segun su descripcion', {
        descripcion   })
    .help()
    .argv

module.exports = {
    argv
}