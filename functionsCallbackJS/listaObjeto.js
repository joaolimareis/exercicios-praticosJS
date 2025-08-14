const alunos = [
  { nome: "Carlos", nota: 7 },
  { nome: "Ana", nota: 9 },
  { nome: "Pedro", nota: 5 }
];

const alunoNotaMaior = alunos.find(n => n.nota > 8)
console.log(alunoNotaMaior)
const nomesAlunos = alunos.map((n)=> n.nome)
console.log(nomesAlunos)