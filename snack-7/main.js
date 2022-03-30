/*
Snack 7
Stampa le potenze di 2 fino a 1000.
*/

let calcolo;

for (let i = 1; i < 10; i++ ){
 calcolo = Math.pow(2, [i]);
 console.log(calcolo);

 if (calcolo === 512){
   console.log(1000);
 }
}

