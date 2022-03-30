/*
Snack 9
Calcola la somma e la media dei primi 10 numeri.
*/

let randomNum, somma;
somma = 0;

for (let i = 0; i < 10; i++) {
  randomNum = Math.ceil(Math.random() * 10);
  somma += randomNum;
}

console.log(somma);
