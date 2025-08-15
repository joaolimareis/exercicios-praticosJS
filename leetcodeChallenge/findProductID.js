const produtos = [
  { id: 101, nome: "Mouse" },
  { id: 102, nome: "Teclado" },
  { id: 103, nome: "Monitor" }
];

const encontrarProduto = (id) => {
  return produtos.find(produto => produto.id === id);
};

console.log(encontrarProduto(102));