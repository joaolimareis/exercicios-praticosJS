function calcularMedia(array, callback){
    let soma = 0
    array.forEach(i =>{
        const result = callback(i)
        soma += result

        console.log(result)
    });
    if (array.length === 0 ){
        return 0
    }
    const media =  soma/ array.length
    return media
}
const numerosOriginais = [1, 2, 3, 4];
const mediaOriginal = calcularMedia(numerosOriginais, numero => numero*2);
console.log(`A média dos números originais é: ${mediaOriginal}`); 