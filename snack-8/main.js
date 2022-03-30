/*
Snack 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

const numbers = prompt("Inserisci un numero di 4 cifre");

const lunghezzaStringa = numbers.length;

if (lunghezzaStringa != 4) {
  alert("Non è possibile inserire più di 4 cifre");
} else {
  const n1 = parseInt(numbers[0]);
  const n2 = parseInt(numbers[1]);
  const n3 = parseInt(numbers[2]);
  const n4 = parseInt(numbers[3]);

  const sum = n1 + n2 + n3 + n4;

  console.log(sum);
}
