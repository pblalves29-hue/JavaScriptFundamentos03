class Pessoa{
    constructor (nome){
        this.nome = nome;
    }
}

class Alunos extends Pessoa{
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }
}

const alunos = new Alunos("Carlos", "DS");
console.log(alunos);