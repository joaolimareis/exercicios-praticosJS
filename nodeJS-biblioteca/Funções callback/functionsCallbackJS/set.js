const nomes = ["Noami", "Dede", "Carla", "Carla", "Victor","Victor","Sozimar"]
const nomesAtualizados =  new Set(nomes)
const listaNomes = [...new Set(nomes)] //converte de para o conjunto(Set) e depois retorna o array
console.log(nomesAtualizados)
console.log(listaNomes)

//Set é um conjunto que armazena valores unicos
//Array like = nao é um array
//metodos nao funcionam com ele