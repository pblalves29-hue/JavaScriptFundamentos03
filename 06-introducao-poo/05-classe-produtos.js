class Produto {
    constructor(preco, nome) {
        this.preco = preco,
            this.nome = nome
    }


    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }
}


const produto = new Produto(100, "Mouse");
console.log(produto);
produto.aplicarDesconto(10);

const produto1 = new Produto(150, "Teclado");
console.log(produto, produto1);
