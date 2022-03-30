/* 
SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const firstWord = prompt('Inserisci una parola');

const secondWord = prompt('Inserisci una seconda parola');

console.log(`La prima parola è: ${firstWord}, La seconda parola è: ${secondWord}`);

if (firstWord.length > secondWord.length){
    console.log(`La seconda parola è più corta : ${secondWord}`);
    console.log(`La prima parola è più lunga: ${firstWord}`);
} else if (firstWord.length < secondWord.length){
    console.log(`La prima parola è più corta: ${firstWord}`);
    console.log(`La seconda parola è più lunga: ${secondWord}`);
} else if (firstWord.length === secondWord.length){
    console.log(`Le due parole sono di pari lunghezza: ${firstWord}, ${secondWord}`);
}