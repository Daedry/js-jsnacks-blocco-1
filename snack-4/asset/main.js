/* 
SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

const invitati = ["mario", "giulio", "luca", "giacomo", "sandra", "valeria"];

const nomeUtente = prompt("Comunicaci il tuo nome per partecipare alla festa del grande Gatsby");

const listaInvitati = invitati.filter(function (inviti) {
  return nomeUtente === inviti;
});

if (nomeUtente === listaInvitati[0]) {
  console.log("Puoi partecipare alla festa del grande Gatsby");
} else {
  console.log("Mi dispiace ma non sei presente nella lista degli invitati");
}
