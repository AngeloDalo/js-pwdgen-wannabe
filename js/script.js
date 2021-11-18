/**
 * Chiedi all’utente il suo nome.
 * Chiedi il suo cognome.
 * Chiedi il suo colore preferito.
 * Scrivi sulla pagina nomecognomecolorepreferito21.
 */

//Inserimento nome
let nomeUtente = prompt('Inserisci il tuo nome:');
//console.log('Nome dell utente: ' + nomeUtente);

//Inserimento cognome
let cognomeUtente = prompt('Inserisci il tuo cognome:');
//console.log('Cognome dell utente: ' + cognomeUtente);

//Inserimento colore preferito
let coloreUtente = prompt('Inserisci il tuo colore preferito:');
//console.log('Colore preferito dell utente: ' + coloreUtente);

//generazione della password
let passwordUtente = `<h2>${nomeUtente}${cognomeUtente}${coloreUtente}21</h2>`;
//console.log('Password generata: ' + passwordUtente);

//password a video
document.getElementById('password_id').innerHTML='<h1>Nuova password:</h1> ' + passwordUtente;
//altro metodo: document.writeln(passwordUtente);


