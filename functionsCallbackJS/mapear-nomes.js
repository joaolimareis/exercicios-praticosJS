function processarNomes(array, callback1, callback2){
    const arrayVazio = []
    array.forEach(nome =>{
        if(callback1(nome)){
           const nomeTransfomado =  callback2(nome)
           arrayVazio.push(nomeTransfomado)

        }
    });
    return arrayVazio
}
function filtroTamanho(nome){
    return nome.length >= 4 
}
function transformarMaiusculo(nome){

    return nome.toUpperCase();

}


const nomes = ['ana', 'joao', 'carlos', 'maria', 'luiz']
const modificaNomes = processarNomes(nomes, filtroTamanho, transformarMaiusculo)
console.log(modificaNomes);
