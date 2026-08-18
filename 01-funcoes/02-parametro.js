// function apresentar(nome){
//     console.log(`Olá, ${nome}`);
// }
// apresentar("Pablo");

function somar(a, b){
    console.log(`${a} + ${b} = ${a+b}`);
}
somar(7, 11);

function apresentar(nome = "Visitante"){
    console.log(`Olá, ${nome}`);
}
apresentar();
apresentar("Pablo");


