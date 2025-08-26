const { log } = require('console');
const fs = require('fs'); // file system - sistema de arquivos

const caminhoArquivo = process.argv; // vetor de argumentos, o primeiro é o node, o segundo é o nome do arquivo
const link =  caminhoArquivo[2]; // pegando o terceiro argumento, que é o caminho do arquivo
fs.readFile(link, 'utf-8', (err, data) => { // lendo o arquivo
    if(err) { 
        console.log('Erro ao ler o arquivo');
    } else
    verificaPalavrasDuplicadas(data); // imprimindo o conteúdo do arquivo
});
//criar um array
//contar as ocorrecias
//montar um objeto com a palavra e a quantidade de vezes que ela apareceu

// {
//     "computador": 10,
//     "web": 5,
// }
function verificaPalavrasDuplicadas(texto){
    const listaDePalavras = texto.split(' '); // separando as palavras por espaço
    const resultado = {}; // objeto vazio
    // Objeto[propriedade] = valor; // adicionando uma propriedade ao objeto
    listaDePalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1; // se a palavra já existe, incrementa o valor, se não, inicializa com 0 e incrementa
    })
    console.log(resultado);
    

}