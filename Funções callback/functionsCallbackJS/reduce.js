
const JS = [4,6,3,7,8,4,64,1,6,89]
const python = [4,5,3,1,3]
const java = [1,3,5,67,3]

function calcularMedia(listaDeNotas){
    const somaDasNotas = listaDeNotas.reduce((acc, nota)=> {
        return acc + nota
    },0 )
    const medi = somaDasNotas / listaDeNotas.length;
    return medi
}
console.log(calcularMedia(JS))
console.log(calcularMedia(java))
console.log(calcularMedia(python))
