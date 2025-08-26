const estudantes = require('./estudantes.json')

function buscaInformacao(lsita, chave, valor){
    return lsita.find((estudante => estudante[chave].includes(valor)))
}
const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)
const estudanteTelefone = buscaInformacao(estudantes, 'telefone', '5896279799')
console.log(estudanteTelefone)