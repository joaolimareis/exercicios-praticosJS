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
const chaveObjeto = Object.keys(estudante)
console.log(chaveObjeto);


if (!chaveObjeto.includes('rua')){
    console.error('Precisa do endereco')
}