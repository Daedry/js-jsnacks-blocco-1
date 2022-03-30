/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numDispari = [];
let askNum;

for(let i = 0; i < 6; i++){
  askNum = parseInt(prompt('Inserisci un numero'));

  if(askNum % 2 === 0){
    console.log(`Il numero:${askNum} è pari`);

  } else {
    console.log(`Il numero:${askNum} è dispari`);
    numDispari.unshift(`${askNum}`);
  }

  console.log(numDispari);
}
