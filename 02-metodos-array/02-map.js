const quantidades = [3, 6, 7, 4];
const dobrar = quantidades.map(quant => quant * 2);
console.log(dobrar);

const numeros = [ 6, 9, 5, 15];
const metade = numeros.map(num => num / 2);
console.log(metade);

let nomes = ["Brenda", "Carlos", "Daniel"]

let aviso = nomes.map(nome => `Olá ${nome.toUpperCase()}`)

console.log(aviso);