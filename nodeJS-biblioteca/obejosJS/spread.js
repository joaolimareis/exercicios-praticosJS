const estudante = {
    nome: 'Jose silva',
    idade: 16,
    cpf: '1111111111',
    Turma: 'AB',
    bolsista: true,
    telefones: ['81293819238', '2173890127'],
    endereco: [{
        rua: 'napolis',
        numero: '76C',
        complemento: 'em frente ao mariapolis'
},{
    rua: 'fireze',
    numero: '90C',
    complemento: null //null é um valor falses
}]

};

function exibirTelefone(telefone1, telefone2){
    console.log(telefone1)
    console.log(telefone2)

}
exibirTelefone(estudante.telefones[0],estudante.telefones[1])
//evitar ficar colcando posicao de array

exibirTelefone(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0]
}
console.log(dadosEnvio)

const objetoOriginal = {
  nome: "GPT",
  linguagem: "JavaScript",
  framework: "Node.js",
  versao: "14.17.3"
};

const objetoNovo = {
  ...objetoOriginal,
  atualizacao: "15.0.0"
}

console.log(objetoNovo);
