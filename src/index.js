




 export  function contaPalavras(texto) {
  const paragrafos = extraiPalavras(texto); // separando os parágrafos por quebra de linha
  //console.log(paragrafos)
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  }); // separando as palavras por espaço
  return contagem;

}

function extraiPalavras(texto) {
return texto.toLowerCase().split("\n");
}



//criar um array
//contar as ocorrecias
//montar um objeto com a palavra e a quantidade de vezes que ela apareceu

// {
//     "computador": 10,
//     "web": 5,
// }

//flatMap - mapeia e achata o array
//exemplo: [[1,2], [3,4]] => [1,2,3,4]
//exemplo de flatMap: ['ola mundo', 'tudo bem'] => ['ola', 'mundo', 'tudo', 'bem']

function limpaPalavra(palavra) {
  return palavra.replace(/[^a-zA-Z0-9(){}~´!;]/g, ""); // removendo caracteres especiais
}

function verificaPalavrasDuplicadas(texto) {
  const listaDePalavras = texto.split(" "); // separando as palavras por espaço
  const resultado = {}; // objeto vazio
  // Objeto[propriedade] = valor; // adicionando uma propriedade ao objeto
  listaDePalavras.forEach((palavra) => {
    if (palavra.length > 3) {
      const palavraLimpa = limpaPalavra(palavra); // limpando a palavra
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // se a palavra já existe, incrementa o valor, se não, inicializa com 0 e incrementa
    }
  });
  return resultado; // retornando o objeto com a contagem de palavras
}
