const produtos = ["Mouse", "Teclado", "Monitor", "Cadeira"];
const nomeRemover = "Monitor"
const indice = produtos.findIndex((p => p === nomeRemover))

if (indice !== -1){
    produtos.splice(indice, 1)

}
console.log(produtos
)