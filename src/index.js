const { log } = require('console');
const fs = require('fs'); // file system - sistema de arquivos

const caminhoArquivo = process.argv; // vetor de argumentos, o primeiro é o node, o segundo é o nome do arquivo
const link =  caminhoArquivo[2]; // pegando o terceiro argumento, que é o caminho do arquivo
fs.readFile(link, 'utf-8', (err, data) => { // lendo o arquivo
    if(err) { 
        console.log('Erro ao ler o arquivo');

    } else
    quebraEmParavras(data); // imprimindo o conteúdo do arquivo
    // verificaPalavrasDuplicadas(data); // imprimindo o conteúdo do arquivo
});
//criar um array
//contar as ocorrecias
//montar um objeto com a palavra e a quantidade de vezes que ela apareceu

// {
//     "computador": 10,
//     "web": 5,
// }
function quebraEmParavras(texto){
    const paragrafos =  texto.toLowerCase().split('\n'); // separando os parágrafos por quebra de linha
    const contagem = paragrafos.flatMap((paragrafo) =>{
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
        
        // se o parágrafo estiver vazio, retorna um array vazio
    }) // separando as palavras por espaço
   

    
    console.log(contagem);
};
//flatMap - mapeia e achata o array
//exemplo: [[1,2], [3,4]] => [1,2,3,4]
//exemplo de flatMap: ['ola mundo', 'tudo bem'] => ['ola', 'mundo', 'tudo', 'bem']


function limpaPalavra(palavra){
    return palavra.replace(/[^a-zA-Z0-9(){}~´!;]/g, ''); // removendo caracteres especiais
}

function verificaPalavrasDuplicadas(texto){
    const listaDePalavras = texto.split(' '); // separando as palavras por espaço
    const resultado = {}; // objeto vazio
    // Objeto[propriedade] = valor; // adicionando uma propriedade ao objeto
    listaDePalavras.forEach(palavra => {
        if(palavra.length >3 ){
           
       
        const palavraLimpa = limpaPalavra(palavra); // limpando a palavra
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // se a palavra já existe, incrementa o valor, se não, inicializa com 0 e incrementa
         }
    })
    return resultado; // retornando o objeto com a contagem de palavras

};