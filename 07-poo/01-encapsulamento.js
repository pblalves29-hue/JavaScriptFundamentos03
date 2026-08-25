class ContaBancaria{
    #saldo = 0;

    depositar(valor){
        if(valor > 0) this.#saldo += valor;
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

const contaThiago = new ContaBancaria();
contaThiago.depositar(100);
console.log(contaThiago.consultarSaldo());