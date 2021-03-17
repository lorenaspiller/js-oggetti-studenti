/*
Parte 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/

// 1. Definisco l'oggetto e le sue chiavi-valori
var studente = {
  nome: "Lorena",
  cognome: "Spiller",
  eta: 35,
}

// 2. Attraverso l'oggetto e stampo le sue proprietà (chiave + valore)
for (var key in studente) {
  console.log(key + " --> " + studente[key]);
}



/*
Parte 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
*/

// 1. Creo un array di oggetti di studenti
var studenti = [
  {
    nome: "Natasha",
    cognome: "Romanoff",
    eta: 36,
  },
  {
    nome: "Tony",
    cognome: "Stark",
    eta: 51,
  },
  {
    nome: "Steve",
    cognome: "Rogers",
    eta: 103,
  },
  {
    nome: "Bruce",
    cognome: "Banner",
    eta: 58,
  },
  {
    nome: "Wanda",
    cognome: "Maximoff",
    eta: 32,
  },
];

// 2. Ciclo su tutti gli studenti e stampo per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}



/*
Parte 3
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/
