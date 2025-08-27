// Listas de Compras 

let listaCompras = ["arroz", "feijão", "macarrão", "leite", "pão"];

function listarTodosOsItens(listaItens){
    listaItens.forEach(itens => console.log(itens))
}
//listarTodosOsItens(listaCompras)

function listaTodaMaiuscula(listaNormal){
    listaNormal.map(itens => console.log(itens.toUpperCase()))

}
//listaTodaMaiuscula(listaCompras)

function procurarItem(lista, item){
    const filtro = lista.find(i => i === item);
    console.log(filtro);
    

}
procurarItem(listaCompras, "pão")

function mostrarPosicao(lista, item){
   const indice = lista.findIndex(p => p === item)
    console.log(indice)

};
mostrarPosicao(listaCompras, "pão")

// Exercico de Fixação soobre CALLBACK FUNCTIONS
function executarTarefa(tarefa, tempo, callback) {
  setTimeout(() => {
    console.log("✅ Tarefa concluída:", tarefa);
    callback();
  }, tempo);
}

executarTarefa("Lavar louça", 1000, () => {
  executarTarefa("Estudar Node.js", 2000, () => {
    executarTarefa("Fazer exercícios", 1500, () => {
      console.log("🎉 Todas as tarefas concluídas!");
    });
  });
});

