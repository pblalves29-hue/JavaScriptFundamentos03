const usarios = ["Pablo", "João", "Vitor", "Pedro"];
const search = usarios.find(User => User == "Pablo" );
console.log(search);

const frutas = ["Banana", "Maçã", "Pera"];
if( um = frutas.find(f => f == "Banana")){
    console.log(`Comprar ${um}`);
}
else{
    console.log("Não compre")
}
