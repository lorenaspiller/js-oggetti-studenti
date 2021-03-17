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

/*
Parte 3
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/
