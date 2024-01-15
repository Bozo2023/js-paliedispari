let Numero=prompt("inserisci un numero da 1 à 5");
let NumerRand=RandomNumer();
function RandomNumer(a,b){
    Math.floor(Math.random()*(max-min +1) + min)
    if (i%2==0){
        document.write("il numero è pari ed è:" + NumerRand)
    } else{
        document.write("il numero è disparipari ed è:" + NumerRand)
    }
}
