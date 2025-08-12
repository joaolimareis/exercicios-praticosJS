const cores = ["azul", "vermelho", "verde", "azul", "amarelo", "azul"];

const verifcarCor = (cor)=>{
    if(cores.includes(cor)){
        console.log(`A cor ${cor} esta presente no array `)

    }else{
        console.log(`A cor ${cor} nao esta presente no array `)

    }
    const quantVezes = cores.filter(cores => cores === cor ).length
    console.log(quantVezes)
    
    
}
verifcarCor("azul")