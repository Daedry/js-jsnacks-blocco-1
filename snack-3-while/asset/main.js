/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let somma, numero_utente;
somma = 0;
let i = 0;

while(i < 10){
    numero_utente = parseInt(prompt('Inserisci un numero'));
    somma += numero_utente

    i++
}

console.log(somma);




