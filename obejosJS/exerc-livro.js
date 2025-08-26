const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "Guerra e Paz na estrada",
    autor: "Pablo Escobar",
    anoPublicacao: 2000,
    genero: "Guerra",
    idadePub: null
}
console.log(livro["autor"])
console.log(livro["anoPublicacao"])
console.log(livro)
livro.avaliacao = 4.5
console.log(livro)
if(livro.avaliacao === null){
    livro.avaliacao = 10
}else{
    console.log(`O livro ${livro.titulo} ja tem avaliação`)
}
livro.genero = "Aventura"
livro.idadePub = anoAtual - livro.anoPublicacao
console.log(livro)
