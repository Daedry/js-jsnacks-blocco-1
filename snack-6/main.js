/*
Snack 6
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. 
*/

let cubo, numero_utente;

for (let i = 0; i < 6; i++) {
  numero_utente = parseInt(prompt("Scrivi un numero"));
  cubo = numero_utente ** 3;
  console.log(cubo);
}
