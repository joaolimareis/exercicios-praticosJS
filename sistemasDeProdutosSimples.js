// Sistema simples de produtos
const produtos = ["mouse", "canela", "prato"];

// Função para listar produtos
function listarProdutos() {
  console.log("\nProdutos:");
  for (const produto of produtos) {
    console.log(produto);
  }
}

// Função para procurar um produto pelo nome
const procurarProduto = (nomeP) => {
  if (produtos.includes(nomeP)) {
    // const i = produtos.indexOf(nomeP);
    // const nomeProduto = produtos[i];
    console.log(`Produto "${nomeP}" foi encontrado.`);
  } else {
    console.log("Produto não encontrado.");
  }
};

// Função para cadastrar um novo produto
const cadastroProduto = (nomeProduto) => {
  produtos.push(nomeProduto);
  console.log(`Produto "${nomeProduto}" adicionado com sucesso.`);
};

// Executando as funções para teste
listarProdutos();
procurarProduto("mouse");
cadastroProduto("Pia");
listarProdutos();

