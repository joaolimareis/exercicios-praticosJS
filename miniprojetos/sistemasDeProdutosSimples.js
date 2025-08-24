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
const procurarProduto = (nome) => {
  if (produtos.includes(nome)) {
    // const i = produtos.indexOf(nomeP);
    // const nomeProduto = produtos[i];
    console.log(`Produto "${nome}" foi encontrado.`);
  } else {
    console.log("Produto não encontrado.");
  }
};

// Função para cadastrar um novo produto
const cadastroProduto = (nomeProduto) => {
  produtos.push(nomeProduto);
  console.log(`Produto "${nomeProduto}" adicionado com sucesso.`);
};

const excluirProduto = (nomeProduto) => {
  const i = produtos.indexOf(nomeProduto)
  if(i !== -1){
    produtos.splice(i,1)
    console.log(`${nomeProduto} deletado com sucesso`)

  }else{
    console.log(`Produto ${nomeProduto} nao econtrado`)
  }
}

// Executando as funções para teste
listarProdutos();
procurarProduto("mouse");
cadastroProduto("Pia");
excluirProduto("mouse")
listarProdutos();

