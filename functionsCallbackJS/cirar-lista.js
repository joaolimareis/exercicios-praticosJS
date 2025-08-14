const lista1 = [1, 2, 3, 4];
const lista2 = [3, 4, 5, 6];

const unirLista = lista1.concat(lista2)
console.log(unirLista)


const semRepetidos = unirLista.filter((num, i, arry)=> {
    return arry.indexOf(num) === i;
})

console.log(semRepetidos)
