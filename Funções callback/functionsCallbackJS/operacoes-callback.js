const array1 = [1,2,3,45,6,7,89]


function aplicarOperacao(array, callback){
   array.forEach(i => {
        const result = callback(i)
        console.log(result)

    });
}

aplicarOperacao(array1, n=> n * 2)