const estudante = {
    nome: 'Jose silva',
    idade: 16,
    cpf: '1111111111',
    Turma: 'AB',
    bolsista: true,
    telefone: ['81293819238', '2173890127'],
    media: 7.8,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false
    }
    //arrow function na lida com o this
    //media é uma propiedade que esta dentro do objeto

};
console.log(estudante.estaAprovado(7))

