$(document).ready(function () {

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
var studente = {
  "nome" : "James",
  "cognome" : "Bond",
  "eta" : 30
};

for (var key in studente) {
  console.log(key + ": " + studente[key]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
var studenti  = [

  {
    "nome" : "James",
    "cognome" : "Bond",
    "eta" : 30
  },

  {
    "nome" : "John",
    "cognome" : "Doe",
    "eta" : 25
  },

  {
    "nome" : "Jane",
    "cognome" : "Doe",
    "eta" : 20
  }

];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoNome = prompt("Inserisci il nome dello studente");

var nuovoCognome = prompt("Inserisci il cognome dello studente");

var nuovaEta = parseInt(prompt("Inserisci l'età dello studente"));

var nuovoStudente = {
  "nome" : nuovoNome,
  "cognome" : nuovoCognome,
  "eta" : nuovaEta
};

studenti.push(nuovoStudente);
console.log(nuovoStudente);

});
