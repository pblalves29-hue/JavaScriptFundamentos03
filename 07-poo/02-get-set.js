class Pessoa{
    #nome;

    constructor(nome){
        return this.nome = nome;
    }

    get nome(){
        return this.#nome;
    }

    set nome(valor){
        if(valor.length >= 2) this.#nome = valor;
    }
}

const pessoa = new Pessoa("Miguel");
console.log(pessoa.nome);
pessoa.nome = "Vitória";
console.log(pessoa.nome);