const cidades = ["São Paulo", "Rio", "Salvador", "Curitiba"];

function nomeCidade(cidade){
  if(cidade != -1){
    console.log(cidades.indexOf(cidade))
  }else{
    console.log(-1)
    
  }
}
nomeCidade("Belem")