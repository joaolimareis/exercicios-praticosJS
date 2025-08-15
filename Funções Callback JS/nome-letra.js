const nomes = ["Lucas", "Maria", "João", "Amanda", "Lara"];
function buscarPelaPrimeiraLetra(letra){
    const achouNome = nomes.find(n => n[0] === letra)
    console.log(achouNome)
}
buscarPelaPrimeiraLetra("A")