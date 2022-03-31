/*
Snack 9
Calcola la somma e la media dei primi 10 numeri.
*/

let randomNum, somma, media;
somma = 0;

for (let i = 0; i < 10; i++) {
  randomNum = Math.ceil(Math.random() * 10);
  somma += randomNum;
}

media = somma / 10;
console.log(somma);
console.log(media);

