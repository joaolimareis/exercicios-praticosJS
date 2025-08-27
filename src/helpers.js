function filtroOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
    
};

function montaSaidaArquivo(listaDePalavras){
    let textoFinal = '';
    listaDePalavras.forEach(paragrafo => {
        const palavrasRepetidas = filtroOcorrencias(paragrafo);
        if(palavrasRepetidas.length){
            textoFinal += 'Palavras que mais apareceram:\n';
            palavrasRepetidas.forEach(palavra =>{
                textoFinal += `A palavra ${palavra} apareceu ${paragrafo[palavra]} vezes\n`;
            });
            textoFinal += '\n';
        }
    });
}

export { montaSaidaArquivo };