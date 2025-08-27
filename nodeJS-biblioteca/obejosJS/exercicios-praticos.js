const pessoa = {
    nome: 'Jao',
    nota: [8, 7, 9, 10],
    calcularMedia: function(){
        somaDasNotas =this.nota.reduce((acc, i)=>{
            return acc + i
            
        }, 0)
        const media = somaDasNotas /this.not.length
        console.log(media) 
    },
    classificaDesempenho: function(){
         if (media >= 9) {
      return 'Desempenho excelente';
    } else if (media >= 7.5 && media < 9) {
      return 'Bom desempenho';
    } else if (media >= 6 && media < 7.5) {
      return 'Desempenho regular';
    } else {
      return 'Desempenho insuficiente';
    }
    }
};

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);
const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);
