const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante)
// console.log(stringEstudante)
// console.log(typeof stringEstudante)
console.log(stringEstudante.nome)

const objsEstudante = JSON.parse(stringEstudante)
console.log(objsEstudante.nome)