class Aluno {
    constructor(nome,idade,rm){
        this.nome = nome,
        this.idade = idade,
        this.rm = rm
    };

    apresentar(){
        console.log(`${this.nome} - Idade: ${this.idade} - RM ${this.rm}`);
    }
}

const aluno = new Aluno("João", 17, 262726);
aluno.apresentar();
const aluno1 = new Aluno("Robert", 16, 262226);
aluno1.apresentar();