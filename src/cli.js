import fs from "fs"; // file system - sistema de arquivos
import trataErro from "./err/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
const caminhoArquivo = process.argv; // vetor de argumentos, o primeiro é o node, o segundo é o nome do arquivo
const link = caminhoArquivo[2]; // pegando o terceiro argumento, que é o caminho do arquivo
const endereco = caminhoArquivo[3]; // pegando o quarto argumento, que é o caminho do arquivo

fs.readFile(link, "utf-8", (erro, texto) => {
   try{
    if (erro) throw erro;
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);

   }catch(erro){
    trataErro(erro);
   }
});

async function criaESalvaArquivo(listaDePalavras, endereco){
    const  arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras =  montaSaidaArquivo(listaDePalavras);
    try{

        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(`Arquivo criado em: ${arquivoNovo}`);
        
    }catch(erro){
        throw erro;
    }
}

//  function criaESalvaArquivo(listaDePalavras, endereco){
//     const  arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaDePalavras);
    

//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//         . then(()=>{
//             // processando feito com o resultado da promise
//             console.log(`Arquivo criado em: ${arquivoNovo}`);
//         }).catch((erro)=>{
//             // tratando o erro da promise
//             throw erro;
//         })
//         .finally(()=>{
//             // sempre executa
//             console.log('operação concluída');
//         });
        
        
    
//  }



