const pares = [2, 4, 6, 8, 10];
const numPar = pares.every(n => n % 2 == 0);
if(numPar == true){
console.log(`Esta lista Só tem numeros pares - ${numPar}`);
}
else{
    console.log(`Essa lista tem algum número impar - ${numPar}`);
}