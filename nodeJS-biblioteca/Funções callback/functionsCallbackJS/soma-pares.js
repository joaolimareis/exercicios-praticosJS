function somarPares(array, callback){
    let somaPares = 0
    array.forEach(n =>{
        if(callback(n)){
            somaPares+= n
        }
    })
    return somaPares
}

function ePar(n){
        return n %2==0
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaDosPares =  somarPares(numeros, ePar)
console.log(somaDosPares)
