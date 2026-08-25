class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }

    verificarAprovacao() {
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
    }

    exibirDados() {
        console.log(`${this.nome} | Média: ${this.calcularMedia()} | ${this.verificarAprovacao()}`);
    }
}

const alunos = [
 new Aluno("Pablo", 10, 6),
 new Aluno("Renan", 7, 9),
 new Aluno("Matheus", 6, 6),
];

alunos.forEach(aluno => aluno.exibirDados());
