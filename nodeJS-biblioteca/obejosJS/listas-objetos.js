const estudante = {
    nome: 'Jose silva',
    idade: 16,
    cpf: '1111111111',
    Turma: 'AB',
    bolsista: true,
    telefone: ['81293819238', '2173890127'],
    endereco: [{
        rua: 'napolis',
        numero: '76C',
        complemento: 'em frente ao mariapolis'
}]

};
estudante.endereco.push({
    rua: 'fireze',
    numero: '90C',
    complemento: null //null é um valor falses
})
// console.log(estudante.endereco)
// console.log(estudante.endereco[1])

const listasEndercosComComplementos = estudante.endereco.filter((endereco)=> {
    return endereco.complemento
});
console.log(listasEndercosComComplementos)