const  calculadora = {
    soma: function (a,b){
        console.log( a + b)
    },
    subtracao: function (a,b){
        console.log( a - b)
    },
    multiplicao:  function(a,b){
        console.log(a * b)
    },
    divisao: function(a,b){
        if(a === 0 || b === 0){
            console.log('Divisao por zero')
        } else{ 
            console.log( a /b)
        }
    },
    calculaMedia: function(array){
        somaDasNotas =array.reduce((acc, i)=>{
            return acc + i
            
        }, 0)
        const media = somaDasNotas /array.length
        console.log(media) 
    }
}
calculadora.soma(4,5)
calculadora.subtracao(6,4)
calculadora.multiplicao(5,5)
calculadora.divisao(10,5)
calculadora.divisao(7,3)
calculadora.divisao(0,10)
calculadora.calculaMedia([4,6,3,7,8,4,64,1,6,89])