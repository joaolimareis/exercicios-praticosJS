const convidadosA = ["Lucas", "Maria", "João"];
const convidadosB = ["Ana", "Pedro", "Marcos"];

const todosConvidados = convidadosA.concat(convidadosB)
function buscarPeloNome(nome){
    const usuario = todosConvidados.find(n => n ===  nome)
    console.log(usuario)
    

}
buscarPeloNome("Lucas")