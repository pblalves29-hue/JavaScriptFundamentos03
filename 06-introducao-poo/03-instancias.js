class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa = new Pessoa("Giovanni", 8);
const pessoa1 = new Pessoa("Sods", 17);
console.log(pessoa, pessoa1);