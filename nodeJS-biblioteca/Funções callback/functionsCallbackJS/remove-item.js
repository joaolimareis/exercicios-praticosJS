
const nomes = ["Ana", "Bruno", "Carla", "Ana", "Pedro"];
const newArray = (name) => {
    const novoArray = []
    nomes.forEach(nomeAtual => {
        if(nomeAtual !== name){
            novoArray.push(nomeAtual)
        }
    })
   return novoArray

};

const araySemNome = newArray("Ana")
console.log(araySemNome)