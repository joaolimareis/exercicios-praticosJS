const contaBancaria = {
    titular: "Jao",
    saldo: 18000,
    depositar: function(valorBase){
        this.saldo += valorBase
    },
    sacar: function(valorBase){
        if (valorBase <= this.saldo){
            this.saldo =- valorBase
        }else{
            console.log("Valor insuficiente")
        }
    }

}

const cliente = {
    nome: "Jose",
    conta: contaBancaria
};

function mostrarSaldo(cliente){
    console.log(`Nome do titular ${cliente.nome}`)
    console.log(`Saldo do titular ${cliente.nome.conta}`)

    
    

    
    
}
cliente.conta.depositar(500)
cliente.conta.sacar(100)
mostrarSaldo(cliente)