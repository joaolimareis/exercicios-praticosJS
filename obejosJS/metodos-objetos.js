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
//Object Keys retornar um array com as chaves

if (!chaveObjeto.includes('rua')){
    console.error('Precisa do endereco')
}

//exemplo do entries que mostra a chave e o valor em um array
const meuObjeto = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]