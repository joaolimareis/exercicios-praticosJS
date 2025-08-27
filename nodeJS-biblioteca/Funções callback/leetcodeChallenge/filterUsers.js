//Crie uma função filtrarUsuariosAtivos que retorne apenas os usuários cujo status seja

const usuarios = [
  { nome: "João", status: "ativo" },
  { nome: "Maria", status: "inativo" },
  { nome: "Pedro", status: "ativo" }
];


function userStatusActive(arrayUserStatusActive){
    const usersActives = arrayUserStatusActive.filter(n => n.status === "ativo")
    return usersActives
}
console.log(userStatusActive(usuarios))