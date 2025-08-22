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

// interar, repetir, percorrer um objeto
// chave variavel de controle
 
for(let chave in estudante){
    const tipo = typeof estudante[chave]
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto)
    }
    
}
estudante['nome'] //notacao []
estudante.nome //notacao .

//Object Object = resultado do JS tentando converter um objeto em uma string
