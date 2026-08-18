const numeros = [2, 4, 7, 6, 9, 8, 19, 20]
const pares = numeros.filter(num => num % 2 == 0);
console.log(pares);

const numImpar = () =>{
const impares = numeros.filter(num => num % 2 == !0);
console.log(impares);
}

numImpar()