/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

const firstNum = parseInt(prompt('Scrivi un numero'));

const secondNum = parseInt(prompt('Scrivi un secondo numero'));

console.log(`primo numero: ${firstNum}, secondo numero: ${secondNum}`);

if(firstNum < secondNum){
    console.log('il primo numero è più grande del secondo');
} else if(firstNum > secondNum){
    console.log('il secondo numero è più grande del primo');
} else if(firstNum === secondNum){
    console.log('I numeri sono equivalenti');
}
