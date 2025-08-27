const estudantes = require('./estudantes.json')

function filtrarPorPropriedade(lista, prop){
    return lista.filter((estudante)=>{
        return !estudante.endereco.hasOwnProperty(prop)
    })
}
const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosIncompletos);
