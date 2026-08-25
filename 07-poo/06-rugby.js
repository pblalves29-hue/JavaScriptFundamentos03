class AtletaRugby {

    #nome;
    
    constructor(nome, numero, posicao) {
        this.#nome = nome;
        this.numero = numero;
        this.posicao = posicao;
    }

    get nome() {
        return this.#nome
    }

    correr() {
        console.log(`${this.nome} está correndo com a bola`);
    }

    passarBola(valor){
        console.log(`${this.nome} passou a bola para ${valor}.`)
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Posição: ${this.posicao}`);
    }


}

const jogador1 = new AtletaRugby("Pablo", 10, "Abertura");

jogador1.mostrarDados();
jogador1.correr();


const jogador2 = new AtletaRugby("Tardin", 2, "Hooker");
jogador1.passarBola(jogador2.nome);
console.log(jogador2.nome)
jogador2.mostrarDados();
