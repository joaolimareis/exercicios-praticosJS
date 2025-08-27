function aplicarOperacao(array, callback){

    array.forEach( n =>{
        const result = callback(n)
        console.log(result)
    })


}
function operacao(n){
    return n *10
}
aplicarOperacao([1, 2, 3], operacao)
