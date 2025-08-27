const pessoaInfo = {
    nome: "Jose Alves",
    idade: 29,
    solteiro: false,
    hobbies: ["Jogar LOL","Pescar","Correr","Andar"],
    mostrarInfoPessoa: function (pessoa){
    console.log(typeof pessoa.nome)
    console.log(typeof pessoa.idade)
    console.log(typeof pessoa.solteiro)
    console.log(typeof pessoa.hobbies)
    console.log(typeof pessoa.endereco)

},
    endereco: {
        rua: "Fireza",
        cidade: 'bacana',
        estado: 'Tamgamandapio'
    }
};

pessoaInfo.mostrarInfoPessoa(pessoaInfo)